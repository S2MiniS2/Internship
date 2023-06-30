package com.scarf.stat.api.controller;

import com.scarf.stat.api.entity.LineEntity;
import com.scarf.stat.api.service.LineService;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/lines")
@CrossOrigin( origins = "http:localhost:3000" )

public class LineController {
    private final LineService lineService;

    public LineController(LineService lineService) {
        this.lineService = lineService;
    }
    @PostMapping("/save")

    public LineEntity saveLine(@RequestBody LineEntity line) {
        //저장하는애니까 list필요없음
        return lineService.saveLine(line);
    }
    @GetMapping("/getAll")
    public List<LineEntity> getAllLines() {
        //get-받아와야하니까 list
        return lineService.getAllLines();
    }
}
