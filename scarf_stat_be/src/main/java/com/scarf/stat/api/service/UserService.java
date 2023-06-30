package com.scarf.stat.api.service;

import com.scarf.stat.api.entity.UserEntity;
import com.scarf.stat.api.repository.UserRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public UserEntity saveUser(UserEntity user){
        return this.userRepo.save(user);
    }
   public List<UserEntity> getAllUser(){
        return userRepo.findAll();
    }
}
