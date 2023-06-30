package com.scarf.stat.api.entity;


import lombok.*;
import javax.persistence.*;

@Entity
@Table(name="Members")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MemberEntity {
    @Id
    @GeneratedValue

    private Long id;
    private Integer cs, rams, admin, test;

}
