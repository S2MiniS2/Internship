package com.scarf.stat.api.service;
import com.scarf.stat.api.entity.LineEntity;
import com.scarf.stat.api.repository.LineRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class LineService {
    private final LineRepo lineRepo;

    @Autowired
    public LineService(LineRepo lineRepo) {
        this.lineRepo = lineRepo;
    }
    //Repo에서 메소드를 service에 불러옴
    public LineEntity saveLine(LineEntity lineEntity) {
        //LineEntity의 정보를 lineEntity에 저장
        //저장(Post)메소드니까
        return lineRepo.save(lineEntity);
    }

    public List<LineEntity> getAllLines(){
        //get(받아오는 것)이기 떄문에 저장할 필요 없어서 ()
        return lineRepo.findAll();
        //JPA에서 기본으로 제공해주는 메소드 (findAll, save등등)
        //새로운 메소드를 만들고 싶으면 Repository 생성
    }
}
