//Tutorial: 8. ES6 Aside const and let
// var nameVar = 'Iraamoni'
// var nameVar = 'Suborna' // reassigning variables does not cause any errors
// console.log('nameVar', nameVar)


let nameLet = 'hello';
nameLet = 'hi' // variable name can be reassigned
console.log(nameLet) 

const nameConst = 'ciao' // cannot reassigned at all
console.log(nameConst);

var fullName = 'Iraa moni';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)

//Challenge: 8. ES6 Aside const and let
    //remove all the var from app.js and replace it with let and const 