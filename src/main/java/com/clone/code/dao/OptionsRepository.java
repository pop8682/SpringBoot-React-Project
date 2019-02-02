package com.clone.code.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clone.code.dto.OptionDto;

public interface OptionsRepository extends JpaRepository<OptionDto, Integer>{

}
