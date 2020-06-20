package com.codeclan.example.OnlineTakeaway.controllers;

import com.codeclan.example.OnlineTakeaway.models.SideMenu;
import com.codeclan.example.OnlineTakeaway.repositories.SideMenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/sidemenu")
public class SideMenuController {

    @Autowired
    SideMenuRepository sideMenuRepository;

    @GetMapping
    public ResponseEntity<List<SideMenu>> getAllSideMenu(){
        return new ResponseEntity<>(sideMenuRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getSideMenu(@PathVariable Long id) {
        return new ResponseEntity<>(sideMenuRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<SideMenu> postSideMenu(@RequestBody SideMenu sideMenu) {
        sideMenuRepository.save(sideMenu);
        return new ResponseEntity<>(sideMenu, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<SideMenu> updateSideMenu(@RequestBody SideMenu sideMenu) {
        sideMenuRepository.save(sideMenu);
        return new ResponseEntity<>(sideMenu, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<SideMenu> deleteSideMenu(@PathVariable Long id){
        SideMenu found = sideMenuRepository.getOne(id);
        sideMenuRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
