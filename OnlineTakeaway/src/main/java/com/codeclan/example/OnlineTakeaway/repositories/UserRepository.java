package com.codeclan.example.OnlineTakeaway.repositories;

import com.codeclan.example.OnlineTakeaway.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
