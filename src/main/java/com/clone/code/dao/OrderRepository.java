package com.clone.code.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clone.code.dto.OrderDto;

public interface OrderRepository extends JpaRepository<OrderDto, Integer>{

}
