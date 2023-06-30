package com.scarf.stat.api.controller;

import com.scarf.stat.api.entity.MemberEntity;
import com.scarf.stat.api.service.MemberService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
public class MemberController {
    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/save")
    public MemberEntity saveMember(@RequestBody MemberEntity member) {
        return memberService.saveMember(member);
    }

    @GetMapping("/getAll")
    public List<MemberEntity> getAllMembers() {
        return memberService.getAllMembers();
    }


}
