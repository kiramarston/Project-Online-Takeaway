package com.codeclan.example.OnlineTakeaway.components;

import com.codeclan.example.OnlineTakeaway.controllers.DrinkMenuController;
import com.codeclan.example.OnlineTakeaway.models.*;
import com.codeclan.example.OnlineTakeaway.repositories.*;
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

    @Autowired
    DessertMenuRepository dessertMenuRepository;

    @Autowired
    DrinkMenuRepository drinkMenuRepository;


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

        SideMenu chips = new SideMenu("Chips", 2.95, "");
        sideMenuRepository.save(chips);

        SideMenu onionRings = new SideMenu("Onion Rings", 2.99, "6 onion rings");
        sideMenuRepository.save(onionRings);

        SideMenu pickledOnion = new SideMenu("Pickled Onion", 0.80, "");
        sideMenuRepository.save(pickledOnion);

        SideMenu currySauce = new SideMenu("Curry Sauce", 2.70, "");
        sideMenuRepository.save(currySauce);

        DessertMenu cookies = new DessertMenu("Choc Chip Cookies", 3.49, "4 large cookies with chocolate chip");
        dessertMenuRepository.save(cookies);

        DessertMenu vanillaIceCream = new DessertMenu("Vanilla Ice Cream", 4.49, "450ml tub of vanilla ice cream");
        dessertMenuRepository.save(vanillaIceCream);

        DessertMenu strawberryIceCream = new DessertMenu("Strawberry Ice Cream", 4.49, "450ml tub of strawberry ice cream");
        dessertMenuRepository.save(strawberryIceCream);

        DessertMenu chocolateIceCream = new DessertMenu("Chocolate Ice Cream", 4.49, "450ml tub of chocolate ice cream");
        dessertMenuRepository.save(chocolateIceCream);

        DrinkMenu coke = new DrinkMenu("Coca-Cola Classic", 2.45, "1.25 litre bottle of Coca-Cola classic");
        drinkMenuRepository.save(coke);

        DrinkMenu dietCoke = new DrinkMenu("Diet Coke", 2.45, "1.25 litre bottle of Diet Coke");
        drinkMenuRepository.save(dietCoke);

        DrinkMenu irnBru = new DrinkMenu("Irn bru", 2.45, "1.25 litre bottle of Irn Bru");
        drinkMenuRepository.save(irnBru);

        DrinkMenu fanta = new DrinkMenu("Fanta Orange", 2.45, "1.25 litre bottle of Fanta Orange");
        drinkMenuRepository.save(fanta);

        DrinkMenu fantaLemon = new DrinkMenu("Fanta Lemon", 2.45, "1.25 litre bottle of Fanta Lemon");
        drinkMenuRepository.save(fantaLemon);

        DrinkMenu water = new DrinkMenu("Abbey Well Water(still)", 1.25, "500ml bottle of Abbey Well Water (still)");
        drinkMenuRepository.save(water);

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

