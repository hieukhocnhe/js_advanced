/**
 * Tue Jan 02
 * Lesson 103 : Destructuring Arrays
 * 
 */

'use strict';

const restaurants = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y] = arr;

let [main, , secondary] = restaurants.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
// console.log(main, secondary);
console.log(restaurants.order(2, 0));

// Receive 2 return values from a function 
const [starter, mainCourses] = restaurants.order(2, 0);
console.log(starter, mainCourses);

// Nested destructuring
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values

const [s = 1, q = 1, r = 1] = [8, 9];
console.log(s, q, r);