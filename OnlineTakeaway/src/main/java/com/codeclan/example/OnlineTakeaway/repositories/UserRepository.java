package com.codeclan.example.OnlineTakeaway.repositories;

import com.codeclan.example.OnlineTakeaway.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByEmailAndPassword(String email, String password);
}
