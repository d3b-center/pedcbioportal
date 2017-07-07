package org.mskcc.cbio.portal.util;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang.StringUtils;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;

public class EventSourcingUtils {
	public static void logEvent(String operation, Object request) {
		try {
			String cavaticaEventsURL = GlobalProperties.getCavaticaEventsURL();
			if (!StringUtils.isBlank(cavaticaEventsURL)) {
				ObjectMapper mapper = new ObjectMapper();
				mapper.setSerializationInclusion(Include.NON_NULL);

				String plainCreds = GlobalProperties.getCavaticaEventsCredentials();
				byte[] base64CredsBytes = Base64.encodeBase64(plainCreds.getBytes());
				String base64Creds = new String(base64CredsBytes);

				HttpHeaders headers = new HttpHeaders();
				headers.setContentType(MediaType.APPLICATION_JSON);
				headers.add("Authorization", "Basic " + base64Creds);

				HttpEntity<String> entity = new HttpEntity<String>(mapper.writeValueAsString(request), headers);

				RestTemplate restTemplate = new RestTemplate();

				// ResponseEntity<String> response =
				restTemplate.exchange(
						cavaticaEventsURL + "/action/" + operation + "/user/"
								+ SecurityContextHolder.getContext().getAuthentication().getName(),
						HttpMethod.POST, entity, String.class);
			}

		} catch (Exception e) {
			//e.printStackTrace();
			// do nothing
		}

	}
}
