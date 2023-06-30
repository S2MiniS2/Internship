package com.scarf.stat.api.repository;

import com.scarf.stat.api.entity.FailureTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FailureTypeRepo extends JpaRepository<FailureTypeEntity, Long> {
    FailureTypeEntity findById(Integer ID);
}
