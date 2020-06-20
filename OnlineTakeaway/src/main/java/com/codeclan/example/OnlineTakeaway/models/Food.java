package com.codeclan.example.OnlineTakeaway.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "food")
@JsonIgnoreProperties(value = "orders")
public abstract class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private double price;

    @Column
    private String description;


    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "orders_foods",
            joinColumns = {@JoinColumn(name = "food_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "order_id", nullable = false, updatable = false)}
    )
    private List<Order> orders;

    public Food(String name, double price, String description) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.orders = new ArrayList<>();
    }

    public Food() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
}
