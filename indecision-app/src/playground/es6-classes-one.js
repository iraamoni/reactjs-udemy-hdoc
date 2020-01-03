 
 //Tutorial: 3. ES6 Classes Part I [03.01.2020]

class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    };
    getGreeting() {
        // return 'hi, I am ' + this.name + '!';
        return `hi, I am ${this.name}`
    };
}

const me = new Person()
console.log(me.getGreeting());

const him = new Person('Foysal A')
console.log(him.getGreeting());

//Challenge: 3. ES6 Classes Part I [03.01.2020]
    //set up constructor to add name & age (default age = 0)
    // getDescription - person's age (name is age years old )

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `hi, I am ${this.name}`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old!`
    }
}

const me = new Person()
console.log(me.getDescription());

const him = new Person('Foysal Ahamed', 12)
console.log(him.getDescription());