package com.example.dod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class DodApplication {

	public static void main(String[] args) {
		SpringApplication.run(DodApplication.class, args);
	}

}
