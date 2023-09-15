package com.example.dod.controller;

import java.io.IOException;

import javax.xml.bind.JAXBException;
import javax.xml.parsers.ParserConfigurationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.xml.sax.SAXException;

import com.example.dod.service.WayfairService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

@CrossOrigin("*")
@RestController
@RequestMapping("/wayfair")
public class Wayfaircontroller {
	@Autowired
	WayfairService wayfairService;
	
	@GetMapping("/save")
	public int saveData() throws JAXBException, ParserConfigurationException, SAXException, IOException {
		return this.wayfairService.getTotalPages();
//		 return "saved";
	}
}
