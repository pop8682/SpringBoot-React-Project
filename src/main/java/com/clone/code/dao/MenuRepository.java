package com.clone.code.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.clone.code.dto.MenuDto;

public interface MenuRepository extends CrudRepository<MenuDto, Integer>{

	List<MenuDto> findAllByStore(int storeId);
}
