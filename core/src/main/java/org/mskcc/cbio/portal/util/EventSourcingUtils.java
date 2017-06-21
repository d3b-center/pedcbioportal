package org.mskcc.cbio.portal.util;

import org.apache.commons.lang.StringUtils;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;

@JsonInclude(Include.NON_NULL)
class LogEventData {
	String user_name;
	String operation;
	Object data;

	public LogEventData(String user_name, String operation, Object request) {
		this.user_name = user_name;
		this.operation = operation;
		this.data = request;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

}

public class EventSourcingUtils {
	public static void logEvent(String operation, Object request) {
		try {
			String cavaticaEventsURL = GlobalProperties.getCavaticaEventsURL();
			if (!StringUtils.isBlank(cavaticaEventsURL)) {
				ObjectMapper mapper = new ObjectMapper();
				mapper.setSerializationInclusion(Include.NON_NULL);

				LogEventData input = new LogEventData(
													SecurityContextHolder.getContext().getAuthentication().getName(),
													StringUtils.defaultIfEmpty(operation, "default"), 
													request);
				
				HttpHeaders headers = new HttpHeaders();
				headers.setContentType(MediaType.APPLICATION_JSON);

				HttpEntity<String> entity = new HttpEntity<String>(mapper.writeValueAsString(input), headers);
				
				RestTemplate restTemplate = new RestTemplate();
				
				ResponseEntity<String> response = restTemplate.exchange(cavaticaEventsURL + System.currentTimeMillis(),
						HttpMethod.POST, entity, String.class);

				// System.out.println(response.getStatusCode());
				// System.out.println(response.getBody());
			}

		} catch (Exception e) {
		}

	}
}
