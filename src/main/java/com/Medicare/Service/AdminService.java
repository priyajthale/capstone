package com.Medicare.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Medicare.Entity.AdminEntity;
import com.Medicare.Repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	AdminRepository repo;
	
	public String addAdmin(AdminEntity adminEntity) {
		repo.save(adminEntity);
		return "Admin Data Saved";
	}
	
	public List<AdminEntity> getallAdmin(){
		List<AdminEntity> admin= new ArrayList<AdminEntity>();
		repo.findAll().forEach((a ->admin.add(a)));
		return admin;
	}

	
}