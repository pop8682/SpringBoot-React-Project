package com.clone.code.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clone.code.dto.OptionDto;

public interface OptionRepository extends JpaRepository<OptionDto, Integer>{
	

}
