package com.Medicare.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Medicare.Entity.ProductsEntity;
import com.Medicare.Entity.UserEntity;
import com.Medicare.Repository.UsersRepository;

@Service
public class UserService {

	@Autowired
	UsersRepository repo;
	
	public List<UserEntity> getallUsers(){
		List<UserEntity> users= new ArrayList<UserEntity>();
		repo.findAll().forEach((u ->users.add(u)));
		return users;
	}
	
	public String addUser(UserEntity user) {
		repo.save(user);
		return "New User Registered";
	}
	
	public String updateUser(UserEntity userEntity){
		repo.save(userEntity);
		return "User Updated";
		
	}
	
	public UserEntity getuserbyid(long id) {
		return repo.findById(id).get();
	}
	
	public String deleteuser(long id) {
		repo.deleteById(id);
		return "User Deleted Succesfully";
	}
}
