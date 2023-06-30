package com.scarf.stat.api.controller;

import com.scarf.stat.api.entity.FailureTypeEntity;
import com.scarf.stat.api.entity.LineEntity;
import com.scarf.stat.api.service.FailureTypeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/FailureType")

public class FailureTypeController {
    private FailureTypeEntity failureTypeEntity;
    private FailureTypeService failureTypeService;
    public FailureTypeController(FailureTypeService failureTypeService) {
        this.failureTypeService = failureTypeService;
    }

    @PostMapping("/save")
    public FailureTypeEntity saveFailureType(@RequestBody FailureTypeEntity failureType) {
        return failureTypeService.saveFailureType(failureType);
    }
    @GetMapping("/getAll")
    public List<FailureTypeEntity> getAllTypes(){

        return failureTypeService.getAllTypes();
    }
}
