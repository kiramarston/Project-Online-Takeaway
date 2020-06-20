package com.codeclan.example.OnlineTakeaway.repositories;

import com.codeclan.example.OnlineTakeaway.models.TraditionalMenu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TraditionalMenuRepository extends JpaRepository<TraditionalMenu, Long> {
}
