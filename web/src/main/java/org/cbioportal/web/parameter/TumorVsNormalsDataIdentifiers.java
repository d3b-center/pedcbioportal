package org.cbioportal.web.parameter;

import java.util.List;

public class TumorVsNormalsDataIdentifiers {
	private String geneticProfileId;
	private List<String> sampleIds;

	public String getGeneticProfileId() {
		return geneticProfileId;
	}

	public void setGeneticProfileId(String geneticProfileId) {
		this.geneticProfileId = geneticProfileId;
	}

	public List<String> getSampleIds() {
		return sampleIds;
	}

	public void setSampleIds(List<String> sampleIds) {
		this.sampleIds = sampleIds;
	}

}
