package com.Medicare.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Medicare.Entity.ProductsEntity;

public interface ProductsRepository extends JpaRepository<ProductsEntity, Long>{
	
	@Query(value = "SELECT * FROM Product p where" + 
				"p.pPrice LIKE CONCAT ('%', :query, '%')", nativeQuery = true)
	public List<ProductsEntity> searchProduct(String query);
		
}