package com.clone.code.dto;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="orders")
@ToString
@Getter @Setter
public class OrderDto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column(name="user_id")
	private int userId;
	@OneToOne
	@JoinColumn(name="menu_id")
	private MenuDto menu;
	private int amount;
	private String status;
	@Column(name="date_order")
	private Date dateOrder;
	@ManyToOne(cascade= {CascadeType.ALL})
	@JoinColumn(name="result_id")
	private OrderResultDto orderResult;

	public OrderDto() {
		
	}
	
	public OrderDto(int id, int userId, MenuDto menu, int amount, String status, Date dateOrder,
			OrderResultDto orderResult) {
		super();
		this.id = id;
		this.userId = userId;
		this.menu = menu;
		this.amount = amount;
		this.status = status;
		this.dateOrder = dateOrder;
		this.orderResult = orderResult;
	}

	
	

	

	



	
	
}
