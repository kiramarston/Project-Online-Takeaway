package com.codeclan.example.OnlineTakeaway.repositories;

import com.codeclan.example.OnlineTakeaway.models.DessertMenu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DessertMenuRepository extends JpaRepository<DessertMenu, Long> {
}
