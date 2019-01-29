package com.clone.code.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.clone.code.dto.StoreDto;

@Repository
public class StoreRepository {

	@Autowired
	private EntityManager entityManager;
	
	@Transactional
	public void saveAll(List<StoreDto> stores) {
		for(int i = 0; i < stores.size(); i++) {
			entityManager.persist(stores.get(i));

			if(i % 20 == 0) {
				entityManager.flush();
				entityManager.clear();
			}
		}
		
		entityManager.flush();
		entityManager.clear();
	}
}
