/**
 * Tus Jan 09
 * Lesson 114 : Looping Objects: Object Keys, Object Values, and Entries
 * 
 */

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[6]]: {
        open: 0, // Open 24 hours 
        close: 24
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Brushetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({ starterIndex, mainIndex, address, time }) {
        console.log(`Order delivered ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is ur declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = (`We are open on ${properties.length} days: `);

for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);

// Entrire object
const entries = Object.entries(openingHours);

// [key, value]
for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
