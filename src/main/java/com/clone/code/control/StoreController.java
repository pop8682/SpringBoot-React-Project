package com.clone.code.control;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.clone.code.dao.StoreRepository;
import com.clone.code.dto.StoreDto;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;


//@RestController
public class StoreController {

	@Autowired private StoreRepository storeRepository;
	
	@PostMapping("/api/storeDtoes")
	public void getStore(@RequestBody String list) throws JsonParseException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		List<StoreDto> lists = mapper.readValue(list, new TypeReference<List<StoreDto>>() {});
		storeRepository.saveAll(lists);
	}
	
	
}
