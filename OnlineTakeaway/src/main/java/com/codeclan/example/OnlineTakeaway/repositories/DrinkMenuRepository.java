package com.codeclan.example.OnlineTakeaway.repositories;

import com.codeclan.example.OnlineTakeaway.models.DrinkMenu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrinkMenuRepository extends JpaRepository<DrinkMenu, Long> {
}
