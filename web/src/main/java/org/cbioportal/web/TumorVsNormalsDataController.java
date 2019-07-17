package org.cbioportal.web;

import java.util.List;

import javax.validation.Valid;

import org.cbioportal.model.TumorVsNormalsData;
import org.cbioportal.service.TumorVsNormalsDataService;
import org.cbioportal.service.exception.GeneNotFoundException;
import org.cbioportal.service.exception.MolecularProfileNotFoundException;
import org.cbioportal.web.config.annotation.InternalApi;
import org.cbioportal.web.parameter.TumorVsNormalsDataFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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

	@PreAuthorize("hasPermission(#molecularProfileId, 'MolecularProfileId', 'read')")
	@RequestMapping(
			value = "/molecular-profiles/{molecularProfileId}/tvn/fetch",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Fetch tumor vs normals data")
	public ResponseEntity<List<TumorVsNormalsData>> fetchTumorVsNormalsData(
			@ApiParam(required = true, value = "Molecular Profile ID e.g. acc_tcga_rna_seq_v2_mrna") @PathVariable String molecularProfileId,
			@ApiParam(required = true, value = "List of Sample IDs/Sample List ID") @Valid @RequestBody TumorVsNormalsDataFilter tumorVsNormalsDataFilter,
			@ApiParam(required = true, value = "Entrez Gene ID") @RequestParam Integer entrezGeneId,
			@ApiParam("zScore") @RequestParam(defaultValue = "false") Boolean zScore)
			throws MolecularProfileNotFoundException, GeneNotFoundException {

		List<TumorVsNormalsData> tumorVsNormalsDataList;
		if (tumorVsNormalsDataFilter.getSampleListId() != null) {
			tumorVsNormalsDataList = tumorVsNormalsDataService.getTVNData(molecularProfileId,
					tumorVsNormalsDataFilter.getSampleListId(), entrezGeneId, zScore);
		} else {
			tumorVsNormalsDataList = tumorVsNormalsDataService.getTVNData(molecularProfileId,
					tumorVsNormalsDataFilter.getSampleIds(), entrezGeneId, zScore);
		}

		return new ResponseEntity<>(tumorVsNormalsDataList, HttpStatus.OK);
	}
}
