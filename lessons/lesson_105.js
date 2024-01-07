/**
 * Sun Jan 07
 * Lesson 105 : The Spread Operator(...)
 * 
 */

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Brushetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours 
            close: 24
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
        console.log(`Order delivered ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is ur declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables : arrays, strings, maps, sets. NOT objects
const str = 'John';
const letters = [...str, ' ', 'T.'];
console.log(letters);
// Real-world exmple
const ingredients = [prompt("Let\'s make pasta ! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects 
const newRestaurant = { foundedIn: 1999, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);
