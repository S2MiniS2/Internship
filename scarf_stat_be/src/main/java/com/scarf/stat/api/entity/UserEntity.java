package com.scarf.stat.api.entity;

import lombok.*;

import javax.persistence.*;
@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username,password,usermail;


}

