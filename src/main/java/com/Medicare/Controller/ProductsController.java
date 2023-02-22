package com.Medicare.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.Medicare.Entity.ProductsEntity;
import com.Medicare.Entity.UserEntity;
import com.Medicare.Service.ProductsService;

@RestController
@RequestMapping("/Products")
@CrossOrigin(origins="http://localhost:4200")
public class ProductsController {

	@Autowired
	ProductsService productsservice;
	
	@PostMapping ("/add-product")
	public String addProducts(@RequestBody ProductsEntity products) {
		return productsservice.addProducts(products);
		
	}

	@DeleteMapping ("/deleteProduct/{id}")
	public String deleteProducts(@PathVariable long id){
		return productsservice.deleteProducts(id);
	}
	
	@GetMapping("/get-all")
	public List<ProductsEntity> getallProducts(){
		return productsservice.getallProducts();
	}
	
	
	@PutMapping ("/update-product")
	public String updateProducts(@RequestBody ProductsEntity products) {
		return productsservice.updateProducts(products);
		
	}
	
	@GetMapping ("/get-product/{id}")
	public ProductsEntity getProductbyid(@PathVariable long id) {
		return productsservice.getProductbyid(id);
	}
	
	
	@GetMapping("/sorted-product")
	public List<ProductsEntity> getsortedProduct(){
		return productsservice.getallProducts();
	}
	
	@GetMapping("/search-product")
	public ResponseEntity<List<ProductsEntity>> searchProduct(@RequestParam("query") String query){
		return ResponseEntity.ok(productsservice.searchProducts(query));
	}
}
