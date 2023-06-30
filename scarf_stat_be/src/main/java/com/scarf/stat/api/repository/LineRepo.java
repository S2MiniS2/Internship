package com.scarf.stat.api.repository;

import com.scarf.stat.api.entity.LineEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LineRepo extends JpaRepository<LineEntity, Long> {
}
