package com.clone.code.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clone.code.dao.MenuRepository;
import com.clone.code.dto.MenuDto;

@RestController
public class MenuController {

	@Autowired
	private MenuRepository menuRepository;
	
	@GetMapping("/api/menuDtoes/{id}")
	public List<MenuDto> menu(@PathVariable int id){
		return menuRepository.findAllByStore(id);
	}
}
