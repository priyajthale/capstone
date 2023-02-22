package com.Medicare.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Medicare.Entity.CartEntity;

@Repository
public interface CartRepository extends CrudRepository<CartEntity, Long> {

	public List<CartEntity> findAllByUserId(Long id);


}