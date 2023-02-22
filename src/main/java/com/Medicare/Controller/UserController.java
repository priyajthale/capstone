package com.Medicare.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Medicare.Entity.ProductsEntity;
import com.Medicare.Entity.UserEntity;
import com.Medicare.Service.UserService;

@RestController
@RequestMapping("/Users")
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	UserService service;
	
	@PostMapping ("/add-user")
	public String addUser(@RequestBody UserEntity user) {
		return service.addUser(user);
	}
	
	@PutMapping("/update-user")
	public String updateUser(@RequestBody UserEntity user) {
		return service.updateUser(user);
	}	
	
	@GetMapping("/getall")
	public List<UserEntity> getallUsers(){
		List<UserEntity> user = service.getallUsers();
		return user;
	}
	
	@GetMapping("/getuser/{id}")
	public UserEntity getuserbyid(@PathVariable long id) {
		return service.getuserbyid(id);
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public String deleteuser(@PathVariable long id) {
		return service.deleteuser(id);
	}
}