package com.clone.code.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
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
	@OneToMany(mappedBy="menuDto", fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	private List<OptionDto> option = new ArrayList<>();

}
