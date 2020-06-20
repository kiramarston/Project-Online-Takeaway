package com.codeclan.example.OnlineTakeaway.models;

import javax.persistence.*;

@Entity
@Table(name = "sideMenus")
public class SideMenu extends Food{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public SideMenu(String name, double price, String description) {
        super(name, price, description);
    }

    public SideMenu(){};

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }

}
