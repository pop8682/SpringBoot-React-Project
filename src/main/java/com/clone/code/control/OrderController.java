package com.clone.code.control;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clone.code.dao.MenuRepository;
import com.clone.code.dao.OrderRepository;
import com.clone.code.dto.MenuDto;
import com.clone.code.dto.OrderDto;
import com.clone.code.dto.UserDto;

@RestController
public class OrderController {

	@Autowired private OrderRepository orderRepository;
	@Autowired private MenuRepository menuRepository;
	
	@PostMapping("/api/orderDtoes/{menu_id}")
	public void saveOrder(@PathVariable(value="menu_id") int menu_id, @RequestParam String amount, HttpSession session) {
		int user_id = ((UserDto) session.getAttribute("user")).getId();
		int num = Integer.parseInt(amount);
		Optional<MenuDto> opt_menu_dto = menuRepository.findById(menu_id);
		MenuDto menu_dto = null;
		if(opt_menu_dto.isPresent())  menu_dto = opt_menu_dto.get();
		
		OrderDto dto = new OrderDto(0, user_id, menu_dto, num);
		orderRepository.save(dto);
	}
	
	@GetMapping("/api/orderDtoes")
	public List<OrderDto> getOrders(HttpSession session) {
		int user_id = ((UserDto) session.getAttribute("user")).getId();
		System.out.println(user_id);
		List<OrderDto> dto = orderRepository.findByUserId(user_id);
		return dto;
	}
}
