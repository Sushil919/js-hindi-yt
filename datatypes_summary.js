//Datatypes Summary

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 2345546775455433452167n

//Reference (Non Primitive)

const heros = ["Eklavya", "Karn", "Arjuna"];

let myObj = {
    name: "Keshav",
    age: 22
}

//Can Treat a function as a variable in JS

const myFunction = function(){
    console.log("Hello World");
}
//*****For return types=>**************https://262.ecma-international.org/5.1/#sec-11.4.3 */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//...........................Stack (Primitive) and heap Memory (Non Primitive).............................................//

let myYoutubename = "hiteshchoudharydotcom"
let anotherName = myYoutubename

console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "keshav@google.com" 
console.log(userTwo);
console.log(userOne);