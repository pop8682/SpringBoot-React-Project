package com.clone.code.dao;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.clone.code.dto.StoreDto;

public interface RestaurantRepository extends JpaRepository<StoreDto, Integer> {
	
	List<StoreDto> findAllBySort(String sort,Pageable pagable);
	List<StoreDto> findAllBySortAndTitleContaining(String sort, String title, Pageable pagable);
	List<StoreDto> findAllBySortAndStateContaining(String sort, String state, Pageable pagable);
	
}
