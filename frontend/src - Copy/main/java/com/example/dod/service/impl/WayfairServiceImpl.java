package com.example.dod.service.impl;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.StringReader;
import java.net.URI;
import java.util.List;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import com.example.dod.model.Wayfair;
import com.example.dod.repo.WayfairRepo;
import com.example.dod.service.WayfairService;

@Service
public class WayfairServiceImpl implements WayfairService {
	
	@Autowired
	WayfairRepo wayFairRepo;

	@Override
	public int fetchAndSave() throws JAXBException, ParserConfigurationException, SAXException, IOException {
		HttpHeaders headers = new HttpHeaders();
//		headers.add("Authorization", "Basic " + "19sz49rfjbrr41y5yg1q1n48cq");
		 headers.setBearerAuth("19sz49rfjbrr41y5yg1q1n48cq");
	        headers.setContentType(MediaType.APPLICATION_XML);
		HttpEntity<?> httpEntity = new HttpEntity<>(headers);
        RequestEntity<Void> requestEntity = new RequestEntity<>(headers, HttpMethod.GET, URI.create("https://link-search.api.cj.com/v2/link-search?website-id=100767136"));

		RestTemplate restTemplate = new RestTemplate();
//		Strin response = restTemplate.exchange(
//				"https://link-search.api.cj.com/v2/link-search?website-id=100767136", HttpMethod.GET,
//				httpEntity,String.class );
//		restTemplate.getfor
        String response=restTemplate.exchange(requestEntity, String.class).getBody();
        
        
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        ByteArrayInputStream inputStream = new ByteArrayInputStream(response.getBytes());
        org.w3c.dom.Document document = builder.parse(inputStream);
        NodeList linkNodes = document.getElementsByTagName("link");
        return linkNodes.getLength();
//        for (int i = 0; i < linkNodes.getLength(); i++) {
//            Element linkElement = (Element) linkNodes.item(i);
//            String description = linkElement.getElementsByTagName("description").item(0).getTextContent();
//            descriptions.add(description);
//        }
		
//		 JAXBContext jaxbContext = JAXBContext.newInstance(Wayfair.class);
//	        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
//	        StringReader reader = new StringReader(response);
////	        unmarshaller.unmarshal
//	        List<Wayfair> lst=(List<Wayfair>)unmarshaller.unmarshal(reader);
//	        this.wayFairRepo.saveAll(lst);
		
	}
	public int getTotalPages() {
		int cnt=1;
		HttpHeaders headers = new HttpHeaders();
		 headers.setBearerAuth("19sz49rfjbrr41y5yg1q1n48cq");
	        headers.setContentType(MediaType.APPLICATION_XML);
	        HttpEntity<?> httpEntity = new HttpEntity<>(headers);
			RestTemplate restTemplate = new RestTemplate();
	        RequestEntity<Void> requestEntity = new RequestEntity<>(headers, HttpMethod.GET, URI.create("https://link-search.api.cj.com/v2/link-search?website-id=100767136&page-number=1&records-per-page=100"));
	        
//	        while(restTemplate.exchange(requestEntity, String.class).getBody()!=null) {
	        while(cnt!=1000) {
		        cnt++;
	        	requestEntity=new RequestEntity<>(headers, HttpMethod.GET, URI.create("https://link-search.api.cj.com/v2/link-search?website-id=100767136&page-number="+cnt+"&records-per-page=100"));

	        }
		return cnt;
		
	}

}
