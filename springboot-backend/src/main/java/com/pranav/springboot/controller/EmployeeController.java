package com.pranav.springboot.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pranav.springboot.exception.MyCustomException;
import com.pranav.springboot.exception.ResourceNotFoundException;
import com.pranav.springboot.model.Employee;
import com.pranav.springboot.repository.EmployeeRepositoy;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

	@Autowired
	EmployeeRepositoy employeeRepositoy;

	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {

		return employeeRepositoy.findAll();

	}
	
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee)
	{
		return employeeRepositoy.save(employee);
	}
	
	@GetMapping("/exception-check")
	public String getException(@PathParam("data") String data)
	{
		if(data.equals(""))
		{
			throw new MyCustomException("Exception Occured");
		}
		return "Greetings";
	}
	
	@GetMapping("/employeebyid")
	public ResponseEntity<Employee> getEmployeeById(@PathParam("id") Long id)
	{
		Employee employee= employeeRepositoy.findById(id).orElseThrow(()->new ResourceNotFoundException("Record for "+id+" not found in database"));
		
		return ResponseEntity.ok(employee);
	}
	
	@PutMapping("/updateemployeebyid")
	public ResponseEntity<Employee> updateEmployeeById(@PathParam("id") long id,@RequestBody Employee employeeFromUi )
	{
		Employee employee= employeeRepositoy.findById(id).orElseThrow(()->new ResourceNotFoundException("Record for "+id+" not found in database"));
		
		employee.setFirstName(employeeFromUi.getFirstName());
		employee.setLastName(employeeFromUi.getLastName());
		employee.setEmailId(employeeFromUi.getEmailId());
		
		employeeRepositoy.save(employee);
		
		return ResponseEntity.ok(employeeFromUi);
	}
	//jenkins trigger check

}
