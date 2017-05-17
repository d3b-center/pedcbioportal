package org.cbioportal.service.impl;

import java.net.URI;
import java.net.URISyntaxException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.math3.stat.descriptive.moment.Mean;
import org.apache.commons.math3.stat.descriptive.moment.StandardDeviation;
import org.apache.commons.math3.stat.inference.TTest;
import org.cbioportal.model.Gene;
import org.cbioportal.model.GeneticData;
import org.cbioportal.model.GeneticProfile;
import org.cbioportal.model.TumorVsNormalsData;
import org.cbioportal.model.TumorVsNormalsDataSampleDataObject;
import org.cbioportal.model.TypeOfCancer;
import org.cbioportal.service.CancerTypeService;
import org.cbioportal.service.GeneService;
import org.cbioportal.service.GeneticDataService;
import org.cbioportal.service.GeneticProfileService;
import org.cbioportal.service.TumorVsNormalsDataService;
import org.cbioportal.service.exception.GeneNotFoundException;
import org.cbioportal.service.exception.GeneticProfileNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TumorVsNormalsDataServiceImpl implements TumorVsNormalsDataService {

	@Autowired
	private CancerTypeService cancerTypeService;

	@Autowired
	private GeneService geneService;

	@Autowired
	private GeneticDataService geneticDataService;

	@Autowired
	private GeneticProfileService geneticProfileService;

	private String pedcbioUtilsUrl;

	@Value("${pedcbio_utils.url:}") // default is empty string
	public void setPedcbioUtilsUrl(String property) {
		pedcbioUtilsUrl = property;
	}

	@Override
	@PreAuthorize("hasPermission(#geneticProfileId, 'List<GeneticProfileId>', 'read')")
	public List<TumorVsNormalsData> getTVNData(Map<String, List<String>> geneticProfileSamplesMap,
			String normalsReferenceId, String geneSymbol, Boolean inputzScoreFlag, Boolean clacpValues)
					throws GeneticProfileNotFoundException, GeneNotFoundException {
		Gene gene = geneService.getGene(geneSymbol);

		List<TumorVsNormalsData> result = new ArrayList<>();

		// get normal tissue data
		URI uri = null;
		try {
			uri = new URI(
					pedcbioUtilsUrl + "reference/" + normalsReferenceId + "/gene_symbol/" + gene.getHugoGeneSymbol());
		} catch (URISyntaxException e2) {
			// TODO proper error handling. for now log error and return empty
			// array
			e2.printStackTrace();
			return result;
		}

		RestTemplate restTemplate = new RestTemplate();
		List<NormalsDataObject> normalsTissueData = Arrays
				.asList(restTemplate.getForObject(uri, NormalsDataObject[].class));

		if (normalsTissueData.size() != 0) {

			// process normal tissue data
			Map<String, List<NormalsDataObject>> normalsTissueDataMap = normalsTissueData.stream()
					.collect(Collectors.groupingBy(NormalsDataObject::getTissue));

			List<TumorVsNormalsData> normalsData = normalsTissueDataMap.entrySet().stream()
					.filter(normals_data -> normals_data.getValue().size() > 1).map(tissueObject -> {
						TumorVsNormalsData tvnData = new TumorVsNormalsData();
						tvnData.setIsTumorData(false);
						tvnData.setIsLog(false);
						tvnData.setName(tissueObject.getKey());
						List<TumorVsNormalsDataSampleDataObject> tvnSampleDataObjects = tissueObject.getValue().stream()
								.map(sampleObject -> {
							Double value = sampleObject.getValue();
							return new TumorVsNormalsDataSampleDataObject(sampleObject.getSample_id(), value);
						}).collect(Collectors.toList());

						tvnData.setData(tvnSampleDataObjects);
						return tvnData;
					}).collect(Collectors.toList());

			// get tumor data
			Map<GeneticProfile, List<String>> tumorInputData = geneticProfileSamplesMap.entrySet().stream()
					.collect(Collectors.toMap(e -> {
						try {
							return geneticProfileService.getGeneticProfile(e.getKey());
						} catch (Exception e1) {
							// TODO : updated error handling
							e1.printStackTrace();
							return null;
						}
					} , e -> e.getValue()));

			// process tumor data
			List<TumorVsNormalsData> tumorData = tumorInputData.entrySet().stream()
					.filter(geneticProfileData -> (geneticProfileData.getKey().getNormalsTissueReferenceId() != null
							&& geneticProfileData.getKey().getNormalsTissueReferenceId().equals(normalsReferenceId)))
					.map(geneticProfileData -> {
						TumorVsNormalsData tvnData = new TumorVsNormalsData();
						List<GeneticData> values_temp;
						try {
							values_temp = geneticDataService.fetchGeneticData(geneticProfileData.getKey().getStableId(),
									geneticProfileData.getValue(),
									new ArrayList<>(Arrays.asList(gene.getEntrezGeneId())), "SUMMARY");
							Boolean isDataLogd = geneticProfileData.getKey().getStableId().endsWith("mrna_U133");
							
							tvnData.setIsTumorData(true);
							tvnData.setIsLog(isDataLogd);
							tvnData.setName(geneticProfileData.getKey().getCancerStudy().getName());
							TypeOfCancer typeOfCancer = cancerTypeService
									.getCancerType(geneticProfileData.getKey().getCancerStudy().getTypeOfCancerId());
							tvnData.setColor(typeOfCancer.getDedicatedColor());
							tvnData.setStudyId(geneticProfileData.getKey().getCancerStudy().getCancerStudyIdentifier());
							List<TumorVsNormalsDataSampleDataObject> tvnSampleDataObjects = new ArrayList<>();
							for (GeneticData geneticData : values_temp) {
								Double value = Double.parseDouble(geneticData.getValue());
								tvnSampleDataObjects
										.add(new TumorVsNormalsDataSampleDataObject(geneticData.getSampleId(), value));
							}
							tvnData.setData(tvnSampleDataObjects);
						} catch (Exception e) {
							// TODO : updated error handling
							e.printStackTrace();
							return null;
						}
						return tvnData;
					}).filter(x -> x != null).collect(Collectors.toList());

			normalsData.sort((TumorVsNormalsData t1, TumorVsNormalsData t2) -> t1.getName().compareTo(t2.getName()));
			tumorData.sort((TumorVsNormalsData t1, TumorVsNormalsData t2) -> t1.getName().compareTo(t2.getName()));

			Boolean isTumorDataloged = tumorData.stream().filter(x -> x.getIsLog()).count() > 0;

			// these values would be used if the number of studies is 1
			// and/or if we need to calculate z-score values
			double[] tumorValues = tumorData.stream().flatMapToDouble(x -> Arrays.stream(x.getSamplesData())).toArray();

			double[] normalValues = normalsData.stream().flatMapToDouble(x -> Arrays.stream(x.getSamplesData()))
					.toArray();

			double[] values = ArrayUtils.addAll(tumorValues, normalValues);

			Mean mean = new Mean();
			double meanVal = mean.evaluate(values, 0, values.length);
			StandardDeviation deviation = new StandardDeviation();
			double deviationVal = deviation.evaluate(values, meanVal, 0, values.length);

			// add tumor data to final object
			result.addAll(tumorData.stream().map(x -> {
				if (inputzScoreFlag) {
					x.setData(x.getData().stream().map(y -> {
						Double value = isTumorDataloged ? y.getValue() : (Math.log(y.getValue()) / Math.log(2));
						y.setValue((value - meanVal) / deviationVal);
						return y;
					}).collect(Collectors.toList()));
				}
				return x;
			}).collect(Collectors.toList()));

			// add normal tissue data to final object
			result.addAll(normalsData.stream().map(x -> {
				// calcuate p-value if number of cancer studies selected is
				// 1
				if (tumorData.size() == 1) {
					x.setpValue(calculatePvalues(tumorValues, x.getSamplesData()));
				}
				if (isTumorDataloged || inputzScoreFlag) {
					x.setData(x.getData().stream().map(y -> {
						// if tumor data is already in log values
						Double value = isTumorDataloged || inputzScoreFlag ? (Math.log(y.getValue()) / Math.log(2)) : y.getValue();
						// if input z_score flag is true
						Double value2 = inputzScoreFlag ? ((value - meanVal) / deviationVal) : value;
						y.setValue(value2);
						return y;
					}).collect(Collectors.toList()));
				}
				return x;
			}).collect(Collectors.toList()));

		}
		return result;
	}

	/**
	 * This method calculates p values between the tumor and normals data set
	 * 
	 * @param normalizedNormalVal
	 * @param normalizedTumorVal
	 * @return
	 */
	private Double calculatePvalues(double[] normalizedTumorVal, double[] normalizedNormalVal) {
		String pValues = "-";
		TTest test = new TTest();
		NumberFormat formatter = new DecimalFormat("0.##E00");
		return test.tTest(normalizedTumorVal, normalizedNormalVal);
	}

}

class NormalsDataObject {
	private String sample_id;
	private String reference;
	private String tissue;
	private String gene_symbol;
	private Double value;

	public String getSample_id() {
		return sample_id;
	}

	public void setSample_id(String sample_id) {
		this.sample_id = sample_id;
	}

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
	}

	public String getTissue() {
		return tissue;
	}

	public void setTissue(String tissue) {
		this.tissue = tissue;
	}

	public String getGene_symbol() {
		return gene_symbol;
	}

	public void setGene_symbol(String gene_symbol) {
		this.gene_symbol = gene_symbol;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

}