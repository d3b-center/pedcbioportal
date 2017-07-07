package org.mskcc.cbio.portal.util;

import java.io.IOException;
import java.util.Enumeration;
import java.util.HashSet;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
class StudyQueryParams {
	private String[] cancer_study_ids;

	private String gene_oql;

	private HashSet<String> genetic_profile_ids;

	private String case_set_id;

	private String[] case_ids;

	public String getGene_oql() {
		return gene_oql;
	}

	public void setGene_oql(String gene_oql) {
		this.gene_oql = gene_oql;
	}

	public HashSet<String> getGenetic_profile_ids() {
		return genetic_profile_ids;
	}

	public void setGenetic_profile_ids(HashSet<String> genetic_profile_ids) {
		this.genetic_profile_ids = genetic_profile_ids;
	}

	public String getCase_set_id() {
		return case_set_id;
	}

	public void setCase_set_id(String case_set_id) {
		this.case_set_id = case_set_id;
	}

	public String[] getCase_ids() {
		return case_ids;
	}

	public void setCase_ids(String[] case_ids) {
		this.case_ids = case_ids;
	}

	public String[] getCancer_study_ids() {
		return cancer_study_ids;
	}

	public void setCancer_study_ids(String[] cancer_study_ids) {
		this.cancer_study_ids = cancer_study_ids;
	}

	public StudyQueryParams(String[] cancer_study_ids, String gene_oql, HashSet<String> genetic_profile_ids,
			String case_set_id, String[] case_ids) {
		super();
		this.cancer_study_ids = cancer_study_ids;
		this.gene_oql = gene_oql;
		this.genetic_profile_ids = genetic_profile_ids;
		this.case_set_id = case_set_id;
		this.case_ids = case_ids;
	}

}

public final class EventsLoggignFilter<W extends HttpServletRequestWrapper> implements Filter {

	public void init(FilterConfig aConfig) throws ServletException {
		// do nothing
	}

	public void destroy() {
		// do nothing
	}

	public void doFilter(ServletRequest aRequest, ServletResponse aResponse, FilterChain aChain)
			throws IOException, ServletException {

		aChain.doFilter(aRequest, aResponse);

		HttpServletRequest request = (HttpServletRequest) aRequest;
		StudyQueryParams studyQueryParams = getSingleStudyQueryParams(request);

		EventSourcingUtils.logEvent("query", studyQueryParams);
	}

	private StudyQueryParams getSingleStudyQueryParams(HttpServletRequest request) {
		String[] cancer_study_ids = StringUtils.defaultIfEmpty((String) request.getAttribute("cancer_study_list"),
				StringUtils.defaultString((String) request.getAttribute("cancer_study_id"))).split(",");

		String gene_oql = ((String) request.getAttribute("gene_list"));

		HashSet<String> geneticProfileIdSet = (HashSet<String>) request.getAttribute("genetic_profile_ids");

		String case_set_id_str = (String) request.getAttribute("case_set_id");
		String case_set_id = (!StringUtils.isEmpty(case_set_id_str))
				? !case_set_id_str.equals("-1") ? case_set_id_str : null : null;

		String case_ids_str = ((String) request.getAttribute("set_of_case_ids"));
		String[] case_ids = (!StringUtils.isEmpty(case_ids_str)) ? case_ids_str.trim().split("( )|(\\t)") : null;

		return new StudyQueryParams(cancer_study_ids, gene_oql, geneticProfileIdSet, case_set_id, case_ids);
	}

	//TODO: support for crosscancer in future
	private StudyQueryParams getCrossCancerStudyQueryParams(HttpServletRequest request) {
		String[] cancer_study_ids = ((String) request.getParameter("cancer_study_list")).split(",");

		String gene_oql = ((String) request.getParameter("gene_list"));

		return new StudyQueryParams(cancer_study_ids, gene_oql, null, null, null);
	}

}