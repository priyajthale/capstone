package com.Medicare.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.Medicare.Entity.UserEntity;

@Repository
public interface UsersRepository extends CrudRepository<UserEntity, Long>{

}