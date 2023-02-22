package com.Medicare.Controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Medicare.Entity.CartEntity;
import com.Medicare.Entity.ProductsEntity;
import com.Medicare.Entity.UserEntity;
import com.Medicare.Service.CartService;
import com.Medicare.Service.ProductsService;
import com.Medicare.Service.UserService;

@RestController
@RequestMapping("/Cart")
@CrossOrigin(origins="http://localhost:4200")
public class CartController {

	int price;
	
	@Autowired
	private CartService service;
	
	@Autowired
	private UserService uservice;
	
	@Autowired
	private ProductsService prservice;
	
	@GetMapping("/getall/{user_id}")
	public List<CartEntity> getallbyUserid(@PathVariable long user_id){
		return service.getallCart(user_id);
	}

	
	@GetMapping("/addtocart/{user_id}/{product_id}")
	public ResponseEntity<CartEntity> addtoCart (@PathVariable long user_id, @PathVariable long product_id) {
		UserEntity users = uservice.getuserbyid(user_id);
		System.out.println(user_id);
		System.out.println(product_id);
		ProductsEntity products = prservice.getProductbyid(product_id);
		
		CartEntity cart = new CartEntity(users, products);
		cart.settQty(1);
		price=(cart.gettQty()*products.getpPrice());
		//System.out.println(price);
		cart.settPrice(price);
		CartEntity addcart = service.addtoCart(cart);	
		return new ResponseEntity<CartEntity>(addcart, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deletefromcart/{id}")
	public String deletefromCart(@PathVariable long id) {
		return service.deletefromCart(id);
	}
	
	@PutMapping("/updatecart/{id}")
	public String updateCart(@RequestBody CartEntity cart, @PathVariable long id) {
		return service.updateCart(cart, id);
	}
	
	@GetMapping("/getproductbyid/{id}")
	public CartEntity getCartbyId(@PathVariable long id) {
		return service.getCartbyId(id);
	}
}
