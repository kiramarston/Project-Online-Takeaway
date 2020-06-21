package com.codeclan.example.OnlineTakeaway.controllers;

import com.codeclan.example.OnlineTakeaway.models.DrinkMenu;
import com.codeclan.example.OnlineTakeaway.repositories.DrinkMenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/drinkmenu")
public class DrinkMenuController {

    @Autowired
    DrinkMenuRepository drinkMenuRepository;

    @GetMapping
    public ResponseEntity<List<DrinkMenu>> getAllDrinkMenu(){
        return new ResponseEntity<>(drinkMenuRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getDrinkMenu(@PathVariable Long id) {
        return new ResponseEntity<>(drinkMenuRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<DrinkMenu> postDrinkMenu(@RequestBody DrinkMenu drinkMenu) {
        drinkMenuRepository.save(drinkMenu);
        return new ResponseEntity<>(drinkMenu, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<DrinkMenu> updateDrinkMenu(@RequestBody DrinkMenu drinkMenu) {
        drinkMenuRepository.save(drinkMenu);
        return new ResponseEntity<>(drinkMenu, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<DrinkMenu> deleteDrinkMenu(@PathVariable Long id){
        DrinkMenu found = drinkMenuRepository.getOne(id);
        drinkMenuRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
