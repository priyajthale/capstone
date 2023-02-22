package com.Medicare.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.Medicare.Entity.ProductsEntity;
import com.Medicare.Entity.UserEntity;
import com.Medicare.Repository.ProductsRepository;

@Service
public class ProductsService {

	@Autowired
	ProductsRepository productsRepository;
	
	public List<ProductsEntity> getallProducts(){
		List<ProductsEntity> products= new ArrayList<ProductsEntity>();
		productsRepository.findAll().forEach((p ->products.add(p)));
		return products;
	}
	
	public String addProducts(ProductsEntity productsEntity){
		productsRepository.save(productsEntity);
		return "Product Successfully";
	}
	
	public String deleteProducts(long id){
		productsRepository.deleteById(id);
		return "Product Deleted";
	}
	

	public String updateProducts(ProductsEntity productsEntity){
		productsRepository.save(productsEntity);
		return "Product Updated";
	}
	
	public ProductsEntity getProductbyid(long id) {
		return productsRepository.findById(id).get();
	}
	
	public List<ProductsEntity> getSortedproduct(){
		return productsRepository.findAll(Sort.by("pPrice"));

	}
	
	public List<ProductsEntity> searchProducts(String query){
		List<ProductsEntity> products = productsRepository.searchProduct(query);
		return products;

	}
	
}
