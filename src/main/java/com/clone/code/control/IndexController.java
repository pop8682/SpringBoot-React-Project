package com.clone.code.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.clone.code.dao.OrderRepositoryJPA;

@Controller
public class IndexController {
	
	@Autowired private OrderRepositoryJPA orderRepositoryJpa;
	
	@RequestMapping("/")
	public String index() {
		return "index";
	}
	
	@RequestMapping("/admin")
	public String admin() {
		return "admin";
	}
	
	@RequestMapping("/login")
	public String login() {
		return "login";
	}
	
	@RequestMapping("/deny")
	public String deny() {
		return "deny";
	}
	
	@RequestMapping("/payment")
	public String payment() {	
		return "payment";
	}
	
	@RequestMapping("/payment_confirmed")
	public String paymentConfirmed() {
		orderRepositoryJpa.updateAll();
		return "redirect:/";
	}
	
//	@RequestMapping("/logout")
//	public String logout() {
//		System.out.println("check logout");
//		return "index";
//	}

}
