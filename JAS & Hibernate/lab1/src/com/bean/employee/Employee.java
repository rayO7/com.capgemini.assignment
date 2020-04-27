package com.bean.employee;
import javax.persistence.*;


@Entity
@Table
public class Employee {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	
	private int id;
	private String name;
	private int salary;
	
	public Employee(int id, String name, int salary){
		super();
		this.id=id;
		this.name=name;
		this.salary=salary;
	}
	
	public Employee()
	{
		super();
	}
	
	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	
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
	
	

}
   