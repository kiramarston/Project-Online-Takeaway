package com.codeclan.example.OnlineTakeaway.models;

import javax.persistence.*;

@Entity
@Table
public class DessertMenu extends Food{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public DessertMenu(String name, double price, String description) {
        super(name, price, description);
    }

    public DessertMenu(){};

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }
}
