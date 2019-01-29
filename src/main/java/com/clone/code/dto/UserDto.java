package com.clone.code.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.Data;
import lombok.ToString;

@Data
@ToString(exclude="password")
@Entity
@Table(name="user")
public class UserDto {

	public static final PasswordEncoder ENCODER = new BCryptPasswordEncoder();
	
	private @Id @GeneratedValue(strategy=GenerationType.IDENTITY) int id;
	private String name;
	private String phone;
	private String password;
	private String email;
	private String address;
	private String role;
	private String enable;
	
	public void setPassword(String password) {
		this.password = ENCODER.encode(password);
	}
}
