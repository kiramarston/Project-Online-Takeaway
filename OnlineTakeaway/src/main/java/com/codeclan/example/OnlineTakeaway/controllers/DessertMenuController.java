package com.codeclan.example.OnlineTakeaway.controllers;

import com.codeclan.example.OnlineTakeaway.models.DessertMenu;
import com.codeclan.example.OnlineTakeaway.models.DessertMenu;
import com.codeclan.example.OnlineTakeaway.repositories.DessertMenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/dessertmenu")
public class DessertMenuController {

    @Autowired
    DessertMenuRepository dessertMenuRepository;

    @GetMapping
    public ResponseEntity<List<DessertMenu>> getAllDessertMenu(){
        return new ResponseEntity<>(dessertMenuRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getDessertMenu(@PathVariable Long id) {
        return new ResponseEntity<>(dessertMenuRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<DessertMenu> postDessertMenu(@RequestBody DessertMenu dessertMenu) {
        dessertMenuRepository.save(dessertMenu);
        return new ResponseEntity<>(dessertMenu, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<DessertMenu> updateDessertMenu(@RequestBody DessertMenu dessertMenu) {
        dessertMenuRepository.save(dessertMenu);
        return new ResponseEntity<>(dessertMenu, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<DessertMenu> deleteDessertMenu(@PathVariable Long id){
        DessertMenu found = dessertMenuRepository.getOne(id);
        dessertMenuRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
