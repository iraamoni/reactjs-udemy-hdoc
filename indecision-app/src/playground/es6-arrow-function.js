 //Tutorial: 9. ES6 Aside Arrow Functions

const square = function (x) {
    return x * x
}

const squareArrow = (x) => x * x;
console.log(squareArrow(9))

//Challenge: 9. ES6 Aside Arrow Functions
const fullName = 'Suborna Jahan'

const firstName = (fullName) => {
    return fullName.split(' ')[0];
}

const a = (fullName) => fullName.split(' ')[0]; //testing the shorthand syntax

console.log(a(fullName));

