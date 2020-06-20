package com.codeclan.example.OnlineTakeaway.controllers;

import com.codeclan.example.OnlineTakeaway.models.User;
import com.codeclan.example.OnlineTakeaway.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<User>> getAllUser(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getUser(@PathVariable Long id) {
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<User> postUser(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable Long id){
        User found = userRepository.getOne(id);
        userRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}