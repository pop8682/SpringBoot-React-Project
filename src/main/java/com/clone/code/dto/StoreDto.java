package com.clone.code.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.ToString;

@Entity
@Table(name="store")
@JsonIgnoreProperties(ignoreUnknown=true)
public class StoreDto {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String state;
	private String title;
	private String size;
	private String sort;
	private String address_land;
	private String address_road;
	private int post;
	private String latitude;
	private String longitude;
	private String minimum_price;
	private String payment_option;
	private String info;
	private String hours;
	private String run;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public String getSort() {
		return sort;
	}
	public void setSort(String sort) {
		this.sort = sort;
	}
	public String getAddress_land() {
		return address_land;
	}
	public void setAddress_land(String address_land) {
		this.address_land = address_land;
	}
	public String getAddress_road() {
		return address_road;
	}
	public void setAddress_road(String address_road) {
		this.address_road = address_road;
	}
	public int getPost() {
		return post;
	}
	public void setPost(int post) {
		this.post = post;
	}
	public String getLatitude() {
		return latitude;
	}
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	public String getLongitude() {
		return longitude;
	}
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	public String getMinimum_price() {
		return minimum_price;
	}
	public void setMinimum_price(String minimum_price) {
		this.minimum_price = minimum_price;
	}
	public String getPayment_option() {
		return payment_option;
	}
	public void setPayment_option(String payment_option) {
		this.payment_option = payment_option;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public String getHours() {
		return hours;
	}
	public void setHours(String hours) {
		this.hours = hours;
	}
	public String getRun() {
		return run;
	}
	public void setRun(String run) {
		this.run = run;
	}
	@Override
	public String toString() {
		return "StoreDto [id=" + id + ", state=" + state + ", title=" + title + ", size=" + size + ", sort=" + sort
				+ ", address_land=" + address_land + ", address_road=" + address_road + ", post=" + post + ", latitude="
				+ latitude + ", longitude=" + longitude + ", minimum_price=" + minimum_price + ", payment_option="
				+ payment_option + ", info=" + info + ", hours=" + hours + ", run=" + run + "]";
	}
	

	
	

	
	
	
}
