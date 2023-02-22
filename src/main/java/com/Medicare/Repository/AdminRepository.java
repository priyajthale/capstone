package com.Medicare.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Medicare.Entity.AdminEntity;

@Repository
public interface AdminRepository extends CrudRepository<AdminEntity, Long>{

}