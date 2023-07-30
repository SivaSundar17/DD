package com.example.dod.service;

import java.io.IOException;

import javax.xml.bind.JAXBException;
import javax.xml.parsers.ParserConfigurationException;

import org.xml.sax.SAXException;

public interface WayfairService {

	public int fetchAndSave() throws JAXBException, ParserConfigurationException, SAXException, IOException;
	public int getTotalPages();
}
