package org.cbioportal.model;

import java.io.Serializable;

public class TumorVsNormalsDataSampleDataObject implements Serializable {

	private String sampleId;
	private Double value;

	public TumorVsNormalsDataSampleDataObject(String sampleId, Double value) {
		this.sampleId = sampleId;
		this.value = value;
	}

	public String getSampleId() {
		return sampleId;
	}

	public void setSampleId(String sampleId) {
		this.sampleId = sampleId;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

}
