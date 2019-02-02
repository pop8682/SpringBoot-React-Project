package com.clone.code.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clone.code.dto.OrderDto;

@Repository
public interface OrderRepository extends JpaRepository<OrderDto, Integer>{

	List<OrderDto> findByUserId(int userId);

}
