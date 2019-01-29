package com.clone.code.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="menu")
public class MenuDto {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private int store;
	private String name;
	private int price;
	private String profile;

}
