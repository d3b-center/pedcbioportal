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
import org.cbioportal.model.GeneMolecularData;
import org.cbioportal.model.MolecularProfile;
import org.cbioportal.model.MolecularProfile.MolecularAlterationType;
import org.cbioportal.model.TumorVsNormalsData;
import org.cbioportal.model.TumorVsNormalsDataSampleDataObject;
import org.cbioportal.service.GeneService;
import org.cbioportal.service.MolecularDataService;
import org.cbioportal.service.MolecularProfileService;
import org.cbioportal.service.TumorVsNormalsDataService;
import org.cbioportal.service.exception.GeneNotFoundException;
import org.cbioportal.service.exception.MolecularProfileNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TumorVsNormalsDataServiceImpl implements TumorVsNormalsDataService {

	@Autowired
	private GeneService geneService;

	@Autowired
	private MolecularDataService molecularDataService;

	@Autowired
	private MolecularProfileService molecularProfileService;

	private String pedcbioUtilsUrl;

	@Value("${pedcbio_utils.url:}") // default is empty string
	public void setPedcbioUtilsUrl(String property) {
		pedcbioUtilsUrl = property;
	}

	@Override
	public List<TumorVsNormalsData> getTVNData(String molecularProfileId, String sampleListId, Integer entrezGeneId,
			Boolean zScore) throws MolecularProfileNotFoundException, GeneNotFoundException {

		List<GeneMolecularData> molecularDataList = molecularDataService.getMolecularData(molecularProfileId,
				sampleListId, Arrays.asList(entrezGeneId), "SUMMARY");

		return createTVNDATA(molecularProfileId, molecularDataList, entrezGeneId, zScore);

	}

	@Override
	public List<TumorVsNormalsData> getTVNData(String molecularProfileId, List<String> sampleIds, Integer entrezGeneId,
			Boolean zScore) throws MolecularProfileNotFoundException, GeneNotFoundException {

		List<GeneMolecularData> molecularDataList = molecularDataService.fetchMolecularData(molecularProfileId,
				sampleIds, Arrays.asList(entrezGeneId), "SUMMARY");

		return createTVNDATA(molecularProfileId, molecularDataList, entrezGeneId, zScore);

	}

	private List<TumorVsNormalsData> createTVNDATA(String molecularProfileId, List<GeneMolecularData> molecularDataList,
			Integer entrezGeneId, Boolean zScore) throws GeneNotFoundException, MolecularProfileNotFoundException {
		// TODO Auto-generated method stub

		Gene gene = geneService.getGene(entrezGeneId.toString());
		MolecularProfile molecularProfile = molecularProfileService.getMolecularProfile(molecularProfileId);

		String normalsReferenceId = null;
		Boolean isDataAlreadyInLogValues = false;

		List<String> temp = Arrays.asList(molecularProfile.getCancerStudyIdentifier() + "_rna_seq_mrna",
				molecularProfile.getCancerStudyIdentifier() + "_rna_seq_v2_mrna",
				molecularProfile.getCancerStudyIdentifier() + "_rna_seq_mrna_capture");

		if (molecularProfile.getMolecularAlterationType().equals(MolecularAlterationType.MRNA_EXPRESSION)
				&& molecularProfile.getDatatype().equals("CONTINUOUS")) {
			if ((molecularProfile.getCancerStudyIdentifier() + "_mrna_U133").equals(molecularProfile.getStableId())) {
				normalsReferenceId = "hgu133plus2";
				isDataAlreadyInLogValues = true;
			} else if (temp.contains(molecularProfile.getStableId())) {
				normalsReferenceId = "gtex";
			}
		}

		List<TumorVsNormalsData> result = new ArrayList<>();
		if (normalsReferenceId == null) {
			return new ArrayList<>();
		}

		// get normal tissue data
		URI uri = null;
		try {
			uri = new URI(
					pedcbioUtilsUrl + "reference/" + normalsReferenceId + "/gene_symbol/" + gene.getHugoGeneSymbol());
		} catch (URISyntaxException e2) {
			// TODO proper error handling. for now log error and return empty
			// array
			e2.printStackTrace();
			return new ArrayList<>();
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
						tvnData.setName(tissueObject.getKey());
						List<TumorVsNormalsDataSampleDataObject> tvnSampleDataObjects = tissueObject.getValue().stream()
								.map(sampleObject -> {
									Double value = sampleObject.getValue();
									return new TumorVsNormalsDataSampleDataObject(sampleObject.getSample_id(), value);
								}).collect(Collectors.toList());

						tvnData.setData(tvnSampleDataObjects);
						return tvnData;
					}).collect(Collectors.toList());

			TumorVsNormalsData tumorData = new TumorVsNormalsData();
			tumorData.setIsTumorData(true);
			tumorData.setName(molecularProfile.getCancerStudy().getName());
			tumorData.setStudyId(molecularProfile.getCancerStudyIdentifier());
			List<TumorVsNormalsDataSampleDataObject> tvnSampleDataObjects = new ArrayList<>();
			for (GeneMolecularData geneticData : molecularDataList) {
				Double value = Double.parseDouble(geneticData.getValue());
				tvnSampleDataObjects.add(new TumorVsNormalsDataSampleDataObject(geneticData.getSampleId(), value));
			}
			tumorData.setData(tvnSampleDataObjects);

			normalsData.sort((TumorVsNormalsData t1, TumorVsNormalsData t2) -> t1.getName().compareTo(t2.getName()));

			final Boolean _isDataAlreadyInLogValues = isDataAlreadyInLogValues;

			// these values would be used if the number of studies is 1
			// and/or if we need to calculate z-score values
			double[] tumorValues = tumorData.getData().stream()
					.mapToDouble(
							y -> _isDataAlreadyInLogValues ? y.getValue() : (Math.log1p(y.getValue()) / Math.log(2)))
					.toArray();

			double[] normalValues = normalsData.stream()
					.flatMapToDouble(x -> Arrays.stream(
							x.getData().stream().mapToDouble(y -> (Math.log1p(y.getValue()) / Math.log(2))).toArray()))
					.toArray();

			double[] values = ArrayUtils.addAll(tumorValues, normalValues);

			Mean mean = new Mean();
			double meanVal = mean.evaluate(values, 0, values.length);
			StandardDeviation deviation = new StandardDeviation();
			double deviationVal = deviation.evaluate(values, meanVal, 0, values.length);

			// add tumor data to final object
			result.add(tumorData);

			tumorData.setData(tumorData.getData().stream().map(y -> {
				if (zScore) {
					Double value = _isDataAlreadyInLogValues ? y.getValue() : (Math.log1p(y.getValue()) / Math.log(2));
					y.setValue((value - meanVal) / deviationVal);
				}
				return y;
			}).collect(Collectors.toList()));

			// add normal tissue data to final object
			result.addAll(normalsData.stream().map(x -> {
				x.setpValue(calculatePvalues(tumorValues,
						x.getData().stream().mapToDouble(y -> (Math.log1p(y.getValue()) / Math.log(2))).toArray()));

				x.setData(x.getData().stream().map(y -> {
					// if tumor data is already in log values
					Double value = _isDataAlreadyInLogValues || zScore ? (Math.log1p(y.getValue()) / Math.log(2))
							: y.getValue();
					// if input z_score flag is true
					Double value2 = zScore ? ((value - meanVal) / deviationVal) : value;

					y.setValue(value2);
					return y;
				}).collect(Collectors.toList()));
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