package com.scarf.stat.api.repository;

import com.scarf.stat.api.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberRepo extends JpaRepository<MemberEntity, Long> {
   }
