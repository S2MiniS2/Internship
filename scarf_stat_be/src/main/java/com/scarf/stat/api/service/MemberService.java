package com.scarf.stat.api.service;

import com.scarf.stat.api.entity.MemberEntity;
import com.scarf.stat.api.repository.MemberRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    private final MemberRepo memberRepo;

    public MemberService(MemberRepo memberRepo) {
        this.memberRepo = memberRepo;
    }

    public MemberEntity saveMember(MemberEntity member) {
        return memberRepo.save(member);
    }

    public List<MemberEntity> getAllMembers() {
        return memberRepo.findAll();
    }
}
