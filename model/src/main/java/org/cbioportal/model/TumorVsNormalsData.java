package org.cbioportal.model;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class TumorVsNormalsData implements Serializable {

	private String studyId;
	private String color;
	private String name;
	private Double pValue;
	private Boolean isTumorData;
	private List<TumorVsNormalsDataSampleDataObject> data;
	@JsonIgnore
	private Boolean isLog = false;

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

	public Boolean getIsLog() {
		return isLog;
	}

	public void setIsLog(Boolean isLog) {
		this.isLog = isLog;
	}

	/**
	 * 
	 * return log values
	 */
	@JsonIgnore
	public double[] getSamplesData() {

		return this.getData().stream()
				.mapToDouble(y -> this.getIsLog() ? y.getValue() : (Math.log1p(y.getValue()) / Math.log(2))).toArray();
	}

}
