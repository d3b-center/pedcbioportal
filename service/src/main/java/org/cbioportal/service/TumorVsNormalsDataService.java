package org.cbioportal.service;

import java.util.List;

import org.cbioportal.model.TumorVsNormalsData;
import org.cbioportal.service.exception.GeneNotFoundException;
import org.cbioportal.service.exception.MolecularProfileNotFoundException;

public interface TumorVsNormalsDataService {

	List<TumorVsNormalsData> getTVNData(String molecularProfileId, String sampleListId, Integer entrezGeneId,
			Boolean zScore) throws MolecularProfileNotFoundException, GeneNotFoundException;

	List<TumorVsNormalsData> getTVNData(String molecularProfileId, List<String> sampleIds, Integer entrezGeneId,
			Boolean zScore) throws MolecularProfileNotFoundException, GeneNotFoundException;
}
