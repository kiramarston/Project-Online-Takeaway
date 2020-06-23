package com.codeclan.example.OnlineTakeaway;

import com.codeclan.example.OnlineTakeaway.models.User;
import com.codeclan.example.OnlineTakeaway.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
class OnlineTakeawayApplicationTests {

	@Autowired
	UserRepository userRepository;
	@Test
	void contextLoads() {
	}
	@Test
	public void canFindUserByEmailAndPassword(){
		List<User> found = userRepository.findByEmailAndPassword("testing@gmail.com", "testing");
		assertEquals("Kira", found.get(0).getFirstName());
	}
}
