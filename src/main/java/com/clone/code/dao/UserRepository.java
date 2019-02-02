package com.clone.code.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clone.code.dto.UserDto;

public interface UserRepository extends JpaRepository<UserDto, Integer>{

	UserDto findByEmail(String email);
	UserDto findByEmailAndRole(String username, String role);
	
}
