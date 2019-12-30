'use strict';

//Tutorial: 10. ES6 Aside Arrow Functions Part II

var add = function add(a, b) {
    console.log(arguments); //anonymous function can get arguments but arrow functions can't 
    return a + b;
};

console.log(add(1, 45));

var user = {
    name: 'Suborna Jahan',
    cities: ['London', 'USA', 'Indonesia'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        var cityMessages = this.cities.map(function (city) {
            return _this.name + 'has lived in ' + city;
        }); //map creates a new array
        return cityMessages;

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city) 
        // })  // does not create a new array
    }
};
console.log(user.printPlacesLived());

//Challenge: 10. ES6 Aside Arrow Functions Part II

//create a function called multiplier 
//numbers -> array of numbers 
//multiplyBy -> single number
// multiply -> return a new array where the number have been multiplied 

var multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 10,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
