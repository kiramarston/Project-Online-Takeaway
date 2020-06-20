package com.codeclan.example.OnlineTakeaway.controllers;

import com.codeclan.example.OnlineTakeaway.models.TraditionalMenu;
import com.codeclan.example.OnlineTakeaway.repositories.TraditionalMenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/traditionalmenu")
public class TraditionalMenuController {

    @Autowired
    TraditionalMenuRepository traditionalMenuRepository;

    @GetMapping
    public ResponseEntity<List<TraditionalMenu>> getAllTraditionalMenu(){
        return new ResponseEntity<>(traditionalMenuRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getTraditionalMenu(@PathVariable Long id) {
        return new ResponseEntity<>(traditionalMenuRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TraditionalMenu> postTraditionalMenu(@RequestBody TraditionalMenu traditionalMenu) {
        traditionalMenuRepository.save(traditionalMenu);
        return new ResponseEntity<>(traditionalMenu, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<TraditionalMenu> updateTraditionalMenu(@RequestBody TraditionalMenu traditionalMenu) {
        traditionalMenuRepository.save(traditionalMenu);
        return new ResponseEntity<>(traditionalMenu, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<TraditionalMenu> deleteTraditionalMenu(@PathVariable Long id){
        TraditionalMenu found = traditionalMenuRepository.getOne(id);
        traditionalMenuRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}