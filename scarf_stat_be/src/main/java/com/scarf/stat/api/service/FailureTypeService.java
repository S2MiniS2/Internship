package com.scarf.stat.api.service;

import com.scarf.stat.api.entity.FailureTypeEntity;
import com.scarf.stat.api.repository.FailureTypeRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FailureTypeService {
    private final FailureTypeRepo failureTypeRepo; //레포지토리 불러옴

    public FailureTypeService(FailureTypeRepo failureTypeRepo){
        this.failureTypeRepo= failureTypeRepo;
    } //연결
    public FailureTypeEntity saveFailureType(FailureTypeEntity failureType) {
        return failureTypeRepo.save(failureType);
    }

    public List<FailureTypeEntity> getAllTypes( ){
        return failureTypeRepo.findAll();
    }
}
