package com.example.dod.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dod.model.WalmartProducts;
import com.example.dod.model.Wayfair;

@Repository
public interface WayfairRepo extends JpaRepository<Wayfair, Long> {

}
