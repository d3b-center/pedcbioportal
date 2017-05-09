package org.cbioportal.model;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class TumorVsNormalsData implements Serializable {

	private String studyId;
	private String color;
	private String name;
	private String pValue;
	private Boolean isTumorData;
	private List<TumorVsNormalsDataSampleDataObject> data;
	private Boolean isZScore;

	public String getStudyId() {
		return studyId;
	}

	public void setStudyId(String studyId) {
		this.studyId = studyId;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getpValue() {
		return pValue;
	}

	public void setpValue(String pValue) {
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

	public Boolean getIsZScore() {
		return isZScore;
	}

	public void setIsZScore(Boolean isZScore) {
		this.isZScore = isZScore;
	}

	@JsonIgnoreProperties
	public double[] getSamplesData() {
		return this.getData().stream().mapToDouble(y -> y.getValue()).toArray();
	}

}
