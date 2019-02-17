package com.clone.code.dao;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class OrderRepositoryJPA {

	@Autowired private EntityManager entityManager;
	
	@Transactional
	public void updateAll() {
		Query query = entityManager.createNativeQuery("UPDATE orders SET orders.status = 'Y' WHERE orders.status = 'N'" );
		query.executeUpdate();
	}
}
