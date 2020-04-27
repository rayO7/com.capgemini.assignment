package com.EmployeeService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/employees")
public class EmployeeController
{
    @Autowired
    EmployeeService service;
    
    List<EmployeeEntity> list;
    
    //add?id=1000&firstName=ray3&lastName=ray3&email=ray3@gmail.com
    //@RequestParam("id") int id,
    
    @GetMapping("/list")
    public List<EmployeeEntity> getAllEmployees() {
         list = service.getAllEmployees();
        new ResponseEntity<List<EmployeeEntity>>(list, new HttpHeaders(), HttpStatus.OK);

        return list;    
        		
    }
    
    @GetMapping("/add")
    public String addEmployee(@RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName, @RequestParam("email") String email)
    {
    	EmployeeEntity emp=new EmployeeEntity();
    	emp.setFirstName(firstName);
    	emp.setLastName(lastName);
    	emp.setEmail(email);
    	
    	try {
			createOrUpdateEmployee(emp);
		} catch (RecordNotFoundException e) {
			
			e.printStackTrace();
		}
    	
    	return "added";
    	
    }
    
    
 
    @GetMapping("/showBy")
    public EmployeeEntity getEmployeeById(@RequestParam("id") int id)
                                                    throws RecordNotFoundException {
        EmployeeEntity entity = service.getEmployeeById(id);
 
         new ResponseEntity<EmployeeEntity>(entity, new HttpHeaders(), HttpStatus.OK);
         
         return entity;
    }
    
    @GetMapping("/update")
    public List updateById(@RequestParam("id") int id,@RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName, @RequestParam("email") String email)throws RecordNotFoundException {
    	service.deleteEmployeeById(id);
    	
    	EmployeeEntity emp=new EmployeeEntity();
    	emp.setFirstName(firstName);
    	emp.setLastName(lastName);
    	emp.setEmail(email);
    	
    	try {
			createOrUpdateEmployee(emp);
		} catch (RecordNotFoundException e) {
			
			e.printStackTrace();
		}
    	
    	list = service.getAllEmployees();
    	return list;
    }
   
    public ResponseEntity<EmployeeEntity> createOrUpdateEmployee(EmployeeEntity employee)
                                                    throws RecordNotFoundException {
        EmployeeEntity updated = service.createOrUpdateEmployee(employee);
        return new ResponseEntity<EmployeeEntity>(updated, new HttpHeaders(), HttpStatus.OK);
    }
 
    @GetMapping("/delete")
    public List deleteEmployeeById(@RequestParam("id") int id)
                                                    throws RecordNotFoundException {
        service.deleteEmployeeById(id);
        list = service.getAllEmployees();
        return list;
    }
 
}