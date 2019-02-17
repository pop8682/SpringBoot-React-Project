package com.clone.code.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clone.code.dto.OrderDto;

@Repository
public interface OrderRepository extends JpaRepository<OrderDto, Integer>{

	List<OrderDto> findByUserIdAndStatus(int userId, String status);
	
}
