package com.codeclan.example.OnlineTakeaway.controllers;

import com.codeclan.example.OnlineTakeaway.models.Order;
import com.codeclan.example.OnlineTakeaway.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrder(){
        return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getOrder(@PathVariable Long id) {
        return new ResponseEntity<>(orderRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Order> postOrder(@RequestBody Order order) {
        orderRepository.save(order);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<Order> updateOrder(@RequestBody Order order) {
        orderRepository.save(order);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Order> deleteOrder(@PathVariable Long id){
        Order found = orderRepository.getOne(id);
        orderRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
