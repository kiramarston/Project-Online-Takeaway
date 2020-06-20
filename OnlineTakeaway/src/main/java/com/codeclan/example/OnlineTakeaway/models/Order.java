package com.codeclan.example.OnlineTakeaway.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "order")
    private User user;


    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            joinColumns = {@JoinColumn(name = "order_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "food_id", nullable = false, updatable = false)}
    )
    private List<com.codeclan.example.OnlineTakeaway.models.Food> foods;

    public Order(User user) {
        this.user = user;
        this.foods = new ArrayList<com.codeclan.example.OnlineTakeaway.models.Food>();
    }

    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<com.codeclan.example.OnlineTakeaway.models.Food> getFoods() {
        return foods;
    }

    public void setFoods(List<com.codeclan.example.OnlineTakeaway.models.Food> foods) {
        this.foods = foods;
    }

    public void addFood(com.codeclan.example.OnlineTakeaway.models.Food food){
        this.foods.add(food);
    }

    public void clearOrder(){
        this.foods = new ArrayList<>();
    }

    public double orderTotal(){
        double total = 0.00;
        for (com.codeclan.example.OnlineTakeaway.models.Food food : this.foods) {
            total += food.getPrice();
        }
        return total;
    }




}
