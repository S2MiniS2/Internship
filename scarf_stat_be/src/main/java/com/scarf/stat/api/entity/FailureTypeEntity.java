package com.scarf.stat.api.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "FailureTypes")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class FailureTypeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "int")
    private Integer generalfailure, servicefailure, breakdown, improvements, inspection, etc;
    //일반 고장, 서비스 고장, 고장 내역, 점검, 개선사항, 기타



}
