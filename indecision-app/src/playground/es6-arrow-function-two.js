//Tutorial: 10. ES6 Aside Arrow Functions Part II

const add = function (a, b) {
    console.log(arguments) //anonymous function can get arguments but arrow functions can't 
    return a + b;
}

console.log (add(1, 45))

const user = {
    name: 'Suborna Jahan',
    cities: ['London', 'USA', 'Indonesia'],
    printPlacesLived() {

        const cityMessages = this.cities.map((city) => this.name + 'has lived in ' + city); //map creates a new array
        return cityMessages;
        
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city) 
        // })  // does not create a new array
    }
}
console.log(user.printPlacesLived())



//Challenge: 10. ES6 Aside Arrow Functions Part II

    //create a function called multiplier 
    //numbers -> array of numbers 
    //multiplyBy -> single number
    // multiply -> return a new array where the number have been multiplied 

    const multiplier = {
        numbers: [2, 4, 6],
        multiplyBy: 10,
        multiply() {
            return this.numbers.map((number) => {
                return number * this.multiplyBy;
            });
        }
    };
    
    console.log(multiplier.multiply())

