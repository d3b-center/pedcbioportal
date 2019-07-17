package org.cbioportal.service.impl;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.commons.lang.StringUtils;
import org.cbioportal.model.CancerStudy;
import org.cbioportal.service.FileStorageService;
import org.cbioportal.service.StudyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

@Service
public class FileStorageServiceImpl implements FileStorageService {

	@Autowired
	private StudyService studyService;

	// example "/Users/kalletlak/Downloads/datasets"
	@Value("${datasets.directory:}")
	private String directory;

	@Override
	public List<String> getDownloadableStudies() {
		List<String> result = new ArrayList<>();
		if (!StringUtils.isEmpty(directory)) {
			try {
				List<CancerStudy> allStudies = studyService.getAllStudies(null, "SUMMARY", 10000000, 0, null, "ASC");
				Map<String, String> studiesSet = new HashMap<>();
				allStudies.forEach(
						e -> studiesSet.put(e.getCancerStudyIdentifier() + ".tar.gz", e.getCancerStudyIdentifier()));

				result = Files.walk(Paths.get(directory)).filter(file -> {
					return Files.isRegularFile(file) && file.getFileName().toString().endsWith(".tar.gz")
							&& studiesSet.containsKey(file.getFileName().toString());
				}).map(file -> {
					return studiesSet.get(file.getFileName().toString());
				}).collect(Collectors.toList());
			} catch (IOException e) {
				//do nothing
			}
		}
		return result;
	}

	@Override
	public Resource loadFileAsResource(String fileName) throws FileNotFoundException {
		if (!StringUtils.isEmpty(directory)) {
			try {
				List<CancerStudy> allStudies = studyService.getAllStudies(null,"SUMMARY", 10000000, 0, null, "ASC");
				Map<String, String> studiesSet = new HashMap<>();
				allStudies.forEach(
						e -> studiesSet.put(e.getCancerStudyIdentifier() + ".tar.gz", e.getCancerStudyIdentifier()));

				if (studiesSet.containsKey(fileName)) {
					Path filePath = Paths.get(directory).toAbsolutePath().normalize()
							.resolve(fileName).normalize();
					Resource resource = new UrlResource(filePath.toUri());
					if (resource.exists()) {
						return resource;
					}
				}
			} catch (MalformedURLException ex) {
				//do nothing
			}
		}
		throw new FileNotFoundException(fileName);
	}
}
