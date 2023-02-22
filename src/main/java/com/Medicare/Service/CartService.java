package com.Medicare.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Medicare.Entity.CartEntity;
import com.Medicare.Repository.CartRepository;

@Service
public class CartService {

	@Autowired
	private CartRepository repo;
	
	public CartEntity addtoCart(CartEntity cart) {
		return repo.save(cart);
	}
	
	public List<CartEntity> getallCart(long id){
		return repo.findAllByUserId(id);
	}
	
	public String deletefromCart(long id) {
		repo.deleteById(id);
		return "Item Deleted from Cart";
	}
	
	public String updateCart(CartEntity cart, long id) {
		CartEntity update = repo.findById(id).get();
		update = cart;
		repo.save(update);
		return "Cart Updated Successfully";
	}
	
	public CartEntity getCartbyId(long id){
		return repo.findById(id).get();
	}
}