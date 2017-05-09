package org.cbioportal.web;

import org.cbioportal.service.CancerTypeService;
import org.cbioportal.service.TumorVsNormalsDataService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration("/applicationContext-web.xml")
@Configuration
public class TumorVsNormalsDataControllerTest {

	@Autowired
	private WebApplicationContext wac;

	private MockMvc mockMvc;

	@Autowired
	private TumorVsNormalsDataService tumorVsNormalsDataService;

	@Bean
	public TumorVsNormalsDataService tumorVsNormalsDataService() {
		return Mockito.mock(TumorVsNormalsDataService.class);
	}

	@Before
	public void setUp() throws Exception {
		Mockito.reset(tumorVsNormalsDataService);
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}
	
	@Test
    public void getTVNData() throws Exception {
		
	}
}
