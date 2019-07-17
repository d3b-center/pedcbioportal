package org.cbioportal.model;

import java.io.Serializable;
import java.util.List;

public class TumorVsNormalsData implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String studyId;
	private String name;
	private Double pValue;
	private Boolean isTumorData;
	private List<TumorVsNormalsDataSampleDataObject> data;

	public String getStudyId() {
		return studyId;
	}

	public void setStudyId(String studyId) {
		this.studyId = studyId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getpValue() {
		return pValue;
	}

	public void setpValue(Double pValue) {
		this.pValue = pValue;
	}

	public List<TumorVsNormalsDataSampleDataObject> getData() {
		return data;
	}

	public void setData(List<TumorVsNormalsDataSampleDataObject> data) {
		this.data = data;
	}

	public Boolean getIsTumorData() {
		return isTumorData;
	}

	public void setIsTumorData(Boolean isTumorData) {
		this.isTumorData = isTumorData;
	}

}
