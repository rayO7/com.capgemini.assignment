package com.trainer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Trainer")
public class Trainer {


	@Id
	@GeneratedValue( strategy= GenerationType.IDENTITY)
	@Column(name="Id")
	private int id;
	
	@Column(name="Name")
	private String name;
	
	@Column(name="Domain")
	private String domain;
	
	@Column(name="Location")
	private String location;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
	@Override
	public String toString() {
		return "Trainer [Id=" + id + ", Name=" + name + ", Domain=" + domain + ", Location=" + location + "]";
	}
	
	
}
