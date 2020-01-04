// Tutorial: 4. ES6 Classes Part II [03.01.2020]

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

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major; 
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        } 
        return description;
    }
}

const anonymous = new Student()
console.log(anonymous.getDescription());

const him = new Student('Foysal Ahamed', 28, 'Computer Engineer')
console.log(him.getDescription());


//Challenge: 4. ES6 Classes Part II [03.01.2020]

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old!`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major; 
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            return description += ` Their major is ${this.major}`
        } 
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
   
    getGreeting() {
        let greetings = super.getGreeting();
        if (this.homeLocation) {
            return greetings += `I am visiting from ${this.homeLocation}`
        }
        return greetings;
    }
}

const anonymous = new Traveler()
console.log(anonymous.getGreeting());

const him = new Traveler('Foysal Ahamed! ', 28, 'London')
console.log(him.getGreeting());