package com.clone.code.dto;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="order_result")
@Data
public class OrderResultDto {

	@Id
	private int id;
	@Column(name="userId")
	private int user_id;
	@Column(name="dateOrder")
	private Date date_order;
	private String status;
	@OneToMany(mappedBy="orderResult",cascade= {CascadeType.ALL})
	private List<OrderDto> orders;
	
	public OrderResultDto() {
		
	}
}
