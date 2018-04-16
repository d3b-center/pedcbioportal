package org.cbioportal.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.cbioportal.model.TumorVsNormalsData;
import org.cbioportal.service.TumorVsNormalsDataService;
import org.cbioportal.service.exception.GeneNotFoundException;
import org.cbioportal.service.exception.MolecularProfileNotFoundException;
import org.cbioportal.web.config.annotation.InternalApi;
import org.cbioportal.web.parameter.TumorVsNormalsDataIdentifiers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@InternalApi
@RestController
@Validated
@Api(tags = "Tumor vs Normals Data", description = " ")
public class TumorVsNormalsDataController {

	@Autowired
	private TumorVsNormalsDataService tumorVsNormalsDataService;

	@RequestMapping(value = "/gene-symbol/{geneSymbol}/normals-reference/{normalsReferenceId}/data/{zScore}", 
			method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Get tumor vs normals data")
	public ResponseEntity<List<TumorVsNormalsData>> getTumorVsNormalsData(
			@ApiParam(required = true, value = "Gene Symbol e.g. MYC") @PathVariable String geneSymbol,
			@ApiParam(required = true, value = "Normals Tissue reference id e.g. gtex") @PathVariable String normalsReferenceId,
			@ApiParam(required = false, value = "z-Score e.g. true/false") @PathVariable Boolean zScore,
			@ApiParam(required = true, value = "List of identifiers") @RequestBody List<TumorVsNormalsDataIdentifiers> tvnDataIdentifiers)
					throws MolecularProfileNotFoundException, GeneNotFoundException {

		Boolean calculatepValues = tvnDataIdentifiers.size() == 1;
		Map<String, List<String>> geneticProfileSamplesMap = new HashMap<>();
		for (TumorVsNormalsDataIdentifiers tvnDataIdentifier : tvnDataIdentifiers) {
			geneticProfileSamplesMap.put(tvnDataIdentifier.getGeneticProfileId(), tvnDataIdentifier.getSampleIds());
		}
		List<TumorVsNormalsData> response = new ArrayList<>();
		response = tumorVsNormalsDataService.getTVNData(new ArrayList<String>(geneticProfileSamplesMap.keySet()),geneticProfileSamplesMap, normalsReferenceId, geneSymbol, zScore,
				calculatepValues);

		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
