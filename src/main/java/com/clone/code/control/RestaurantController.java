package com.clone.code.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.clone.code.dao.RestaurantRepository;
import com.clone.code.dto.StoreDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class RestaurantController {

	@Autowired private RestaurantRepository restaurantRepository;
	
	@GetMapping("/api/storeDtoes/{sort}")
	public List<StoreDto> getRestaurant(@PathVariable String sort, Pageable pagable) throws JsonProcessingException {
		System.out.println(sort);
		return restaurantRepository.findAllBySort(sort,pagable);
	}
}
