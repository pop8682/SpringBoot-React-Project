package com.clone.code.control;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clone.code.dao.OrderRepository;
import com.clone.code.dto.OrderDto;
import com.clone.code.dto.UserDto;

@RestController
public class OrderController {

	@Autowired
	private OrderRepository orderRepository;
	
	@PostMapping("/api/orderDtoes/{menu_id}")
	public void saveOrder(@PathVariable(value="menu_id") int menu_id, @RequestParam String amount, HttpSession session) {
		UserDto user = (UserDto) session.getAttribute("user");
		int user_id = user.getId();
		int num = Integer.parseInt(amount);
		System.out.println(user_id);
		OrderDto dto = new OrderDto(0, user_id, menu_id, num);
		orderRepository.save(dto);
	}
}
