package com.scarf.stat.api.repository;

import com.scarf.stat.api.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepo extends JpaRepository<UserEntity, Long> {
    UserEntity findById(String ID);
}
