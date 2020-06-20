package com.codeclan.example.OnlineTakeaway.components;

import com.codeclan.example.OnlineTakeaway.models.Order;
import com.codeclan.example.OnlineTakeaway.models.SideMenu;
import com.codeclan.example.OnlineTakeaway.models.TraditionalMenu;
import com.codeclan.example.OnlineTakeaway.models.User;
import com.codeclan.example.OnlineTakeaway.repositories.OrderRepository;
import com.codeclan.example.OnlineTakeaway.repositories.SideMenuRepository;
import com.codeclan.example.OnlineTakeaway.repositories.TraditionalMenuRepository;
import com.codeclan.example.OnlineTakeaway.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    TraditionalMenuRepository traditionalMenuRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    SideMenuRepository sideMenuRepository;


    public DataLoader() {

    }

    @Override
    public void run(ApplicationArguments args) {
        TraditionalMenu batteredHaddock = new TraditionalMenu("Battered Haddock", 5.60, 6.70, "2 Fish in batter");
        traditionalMenuRepository.save(batteredHaddock);

        TraditionalMenu miniBatteredHaddock = new TraditionalMenu("Mini Battered Haddock", 4.60, 5.70, "1 Fish in batter");
        traditionalMenuRepository.save(miniBatteredHaddock);

        TraditionalMenu specialHaddock = new TraditionalMenu("Special Haddock", 7.70, 9.70, "2 Fish in breadcrumbs");
        traditionalMenuRepository.save(specialHaddock);

        TraditionalMenu miniSpecialHaddock = new TraditionalMenu("Mini Special Haddock", 5.60, 6.70, "1 Fish in breadcrumbs");
        traditionalMenuRepository.save(miniSpecialHaddock);

        TraditionalMenu cod = new TraditionalMenu("Cod", 7.80, 8.80, "2 Fish in batter");
        traditionalMenuRepository.save(cod);

        TraditionalMenu scampi = new TraditionalMenu("Scampi", 5.20, 6.70, "12 pieces and salad");
        traditionalMenuRepository.save(scampi);

        TraditionalMenu halfChicken = new TraditionalMenu("Half Chicken", 5.20, 6.50, "");
        traditionalMenuRepository.save(halfChicken);

        TraditionalMenu halfChickenInBatter = new TraditionalMenu("Half Chicken in Batter", 5.40, 6.80, "");
        traditionalMenuRepository.save(halfChickenInBatter);

        TraditionalMenu chickenNuggets = new TraditionalMenu("Chicken Nuggets", 4.20, 5.70, "8 Pieces");
        traditionalMenuRepository.save(chickenNuggets);

        TraditionalMenu steakPie = new TraditionalMenu("Steak Pie", 3.50, 4.90, "");
        traditionalMenuRepository.save(steakPie);

        TraditionalMenu mincePie = new TraditionalMenu("Mince Pie", 3.20, 4.70, "");
        traditionalMenuRepository.save(mincePie);

        TraditionalMenu jumboSausage = new TraditionalMenu("Jumbo Sausage", 3.20, 4.70, "2 Sausages in batter");
        traditionalMenuRepository.save(jumboSausage);

        TraditionalMenu smokedSausage = new TraditionalMenu("Smoked Sausage", 3.20, 4.70, "");
        traditionalMenuRepository.save(smokedSausage);

        TraditionalMenu smokedSausageInBatter = new TraditionalMenu("Smoked Sausage in Batter", 3.60, 4.90, "");
        traditionalMenuRepository.save(smokedSausageInBatter);

        TraditionalMenu hamburger = new TraditionalMenu("Hamburger", 3.20, 4.70, "Hamburger in batter");
        traditionalMenuRepository.save(hamburger);

        TraditionalMenu blackPudding = new TraditionalMenu("Black Pudding", 3.20, 4.70, "");
        traditionalMenuRepository.save(blackPudding);

        TraditionalMenu spicyHaggis = new TraditionalMenu("Spicy Haggis", 3.20, 4.70, "");
        traditionalMenuRepository.save(spicyHaggis);

        TraditionalMenu haggis = new TraditionalMenu("Haggis", 3.20, 4.70, "");
        traditionalMenuRepository.save(haggis);

        TraditionalMenu whitePudding = new TraditionalMenu("White Pudding", 3.40, 4.70, "");
        traditionalMenuRepository.save(whitePudding);

        TraditionalMenu kingRib = new TraditionalMenu("King Rib", 3.40, 4.60, "");
        traditionalMenuRepository.save(kingRib);

        TraditionalMenu halfFriedPizza = new TraditionalMenu("Half Fried Pizza", 3.20, 4.70, "");
        traditionalMenuRepository.save(halfFriedPizza);

        TraditionalMenu friedPizza = new TraditionalMenu("Fried Pizza", 4.70, 5.70, "");
        traditionalMenuRepository.save(friedPizza);

        TraditionalMenu halfFriedPizzaCrunch = new TraditionalMenu("Half Fried Pizza Crunch", 3.50, 4.80, "Half Fried Pizza in batter");
        traditionalMenuRepository.save(halfFriedPizzaCrunch);

        TraditionalMenu friedPizzaCrunch = new TraditionalMenu("Fried Pizza Crunch", 5.90, 6.80, "Fried Pizza in batter");
        traditionalMenuRepository.save(friedPizzaCrunch);

        SideMenu chips = new SideMenu("chips", 2.90, "");
        sideMenuRepository.save(chips);

        User user = new User("Oscar", "Tsang", "123 waterloo st", "ohh@gmail.com", "password");
        User user2 = new User("Kira", "Tsang", "123 waterloo st", "ohh@gmail.com", "password");
        userRepository.save(user);
        userRepository.save(user2);
        Order order = new Order(user);
        orderRepository.save(order);
        order.addFood(friedPizzaCrunch);
        order.addFood(kingRib);
        orderRepository.save(order);

    }

}

