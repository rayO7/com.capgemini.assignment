package com.dao.operations;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.bean.employee.Employee;

public class CrudOperation {
	
	static EntityManagerFactory emfactory= Persistence.createEntityManagerFactory("EmployeeJPA");
	static EntityManager entityManager= emfactory.createEntityManager();
	
	public static void main(String a[])
	{
		CrudOperation op=new CrudOperation();
//		op.insertData(new Employee(107,"RAY",100000));
		
//		op.updateEmployee(102, 98765);
		
//		op.deleteEmployee(102);
		
		op.displayEmployee(107);
		
	
	}

	private void displayEmployee(int id) {
		
		Employee employee=entityManager.find(Employee.class, id);
		System.out.println("Employee Details:");
		System.out.println("ID: "+employee.getId());
		System.out.println("NAME: "+employee.getName());
		System.out.println("SALARY: "+employee.getSalary());
		
	}

	private void deleteEmployee(int id) {
		
		entityManager.getTransaction().begin();
		Employee employee= entityManager.find(Employee.class,id);
		entityManager.remove(employee);
		
		entityManager.getTransaction().commit();
		
	}

	private void updateEmployee(int id, int salary) {
		
		entityManager.getTransaction().begin();
		Employee employee=entityManager.find(Employee.class, id);
		employee.setSalary(salary);
		entityManager.getTransaction().commit();
		
	}

	private void insertData(Employee employee) {
		
		entityManager.getTransaction().begin();
		entityManager.persist(employee);
		entityManager.getTransaction().commit();
		
	}
	
	
}
