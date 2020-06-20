package com.codeclan.example.OnlineTakeaway.repositories;

import com.codeclan.example.OnlineTakeaway.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
