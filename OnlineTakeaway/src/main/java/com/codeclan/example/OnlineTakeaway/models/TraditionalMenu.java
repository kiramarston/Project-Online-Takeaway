package com.codeclan.example.OnlineTakeaway.models;

import javax.persistence.*;

@Entity
@Table(name = "traditionalMenus")
public class TraditionalMenu extends Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private double supperPrice;

    public TraditionalMenu(String name, double price, double supperPrice, String description) {
        super(name, price, description);
        this.supperPrice = supperPrice;
    }

    public TraditionalMenu(){};

    public double getSupperPrice() {
        return supperPrice;
    }

    public void setSupperPrice(double supperPrice) {
        this.supperPrice = supperPrice;
    }

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }
}