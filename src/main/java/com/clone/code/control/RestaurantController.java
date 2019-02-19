package com.clone.code.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clone.code.dao.RestaurantRepository;
import com.clone.code.dto.StoreDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class RestaurantController {

	@Autowired private RestaurantRepository restaurantRepository;
	
	@GetMapping("/api/storeDtoes/{sort}")
	public List<StoreDto> getRestaurant(@PathVariable String sort, @RequestParam String select, String keyword,Pageable pagable) throws JsonProcessingException {
		System.out.println("sort : " +sort);
		System.out.println("keyword : " + keyword);
		System.out.println("select : " + select);
		if(select.equals("title") && !keyword.equals("")) {
			System.out.println(restaurantRepository.findAllBySortAndTitleContaining(sort, keyword, pagable));
			return restaurantRepository.findAllBySortAndTitleContaining(sort, keyword, pagable);
		} else if(select.equals("state") && !keyword.equals("")) {
			return restaurantRepository.findAllBySortAndStateContaining(sort, keyword, pagable);
		} else {
			return restaurantRepository.findAllBySort(sort,pagable);
		}
		
		
		
	}
//	
//	@GetMapping("/api/storeDtoes")
//	public List<StoreDto> getRestaurantBySearch(@RequestParam String select, String keyword){
//		System.out.println("keyword : " + keyword);
//		System.out.println("select : " + select);
//		if(select.equals("title")) {
//			return restaurantRepository.findAllByTitleContaining(keyword);
//		} else if(select.equals("state")) {
//			return restaurantRepository.findAllByStateContaining(keyword);
//		}
//		return null;
//	}
}
