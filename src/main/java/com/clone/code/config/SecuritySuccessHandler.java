package com.clone.code.config;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import com.clone.code.dao.UserRepository;
import com.clone.code.dto.UserDto;

@Configuration
public class SecuritySuccessHandler implements AuthenticationSuccessHandler{

	@Autowired
	private UserRepository userRepository;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		HttpSession session = request.getSession();
		User authUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		UserDto dto = new UserDto();
		String username = authUser.getUsername();
		String role = authUser.getAuthorities().iterator().next().getAuthority();
		System.out.println(userRepository.findByEmailAndRole(username, role));
		session.setAttribute("user", userRepository.findByEmailAndRole(username, role));
		response.sendRedirect("/");
	}
	
	
}
