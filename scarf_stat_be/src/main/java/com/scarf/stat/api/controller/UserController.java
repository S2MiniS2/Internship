package com.scarf.stat.api.controller;

import com.scarf.stat.api.entity.UserEntity;
import com.scarf.stat.api.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private UserEntity userEntity;
    private UserService userService;

    public UserController(UserService userService){
        this.userService=userService;
    }

    @PostMapping("/save")
    public UserEntity userEntity(@RequestBody UserEntity user){
        return userService.saveUser(user);
    }
    @GetMapping("/getAll")
    public List<UserEntity> getAllUser(){
        return userService.getAllUser();
    }

}
