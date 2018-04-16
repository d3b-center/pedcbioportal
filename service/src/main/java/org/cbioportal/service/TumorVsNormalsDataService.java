package org.cbioportal.service;

import java.util.List;
import java.util.Map;

import org.cbioportal.model.TumorVsNormalsData;
import org.cbioportal.service.exception.GeneNotFoundException;
import org.cbioportal.service.exception.MolecularProfileNotFoundException;

public interface TumorVsNormalsDataService {

	List<TumorVsNormalsData> getTVNData(List<String> geneticProfileStableIds, Map<String, List<String>> geneticProfileSamplesMap,
			String normalsReferenceId, String geneSymbols, Boolean zScore, Boolean clacpValues)
					throws MolecularProfileNotFoundException, GeneNotFoundException;
}
