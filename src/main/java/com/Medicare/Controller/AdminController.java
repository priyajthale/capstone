package com.Medicare.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Medicare.Entity.AdminEntity;
import com.Medicare.Service.AdminService;


@RestController
@RequestMapping("/admin")
@CrossOrigin(origins="http://localhost:4200")
public class AdminController {
	@Autowired
	AdminService adminService;
	
	@PostMapping("/add")
	public String addAdmin (@RequestBody AdminEntity admin){
		return adminService.addAdmin(admin);
	}
	
	@GetMapping("/get-all")
	public ResponseEntity<List<AdminEntity>> getallAdmin(){
		List<AdminEntity> admin = adminService.getallAdmin();
		return new ResponseEntity<List<AdminEntity>>(admin, HttpStatus.OK);
	}
}