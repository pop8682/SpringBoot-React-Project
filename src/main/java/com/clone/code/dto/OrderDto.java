package com.clone.code.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="orders")
@NoArgsConstructor
public class OrderDto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private int user_id;
	private int menu_id;
	private int amount;
	
	public OrderDto(int id, int user_id, int menu_id, int amount) {
		super();
		this.id = id;
		this.user_id = user_id;
		this.menu_id = menu_id;
		this.amount = amount;
	}
	
	
}
