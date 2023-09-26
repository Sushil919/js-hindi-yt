// let score = "33abc"
// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// // 33 => number
// // "33" => stirng
// // "33abc" => NaN
// // null => 0
// //undefined => Nan 
// //true => 1; false =>0


// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// let isLoggedIn = ""

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let isLoggedIn = "Keshav"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// // 1 => true; 0 => false
// // "" => false
// //"hitesh" => true 

/************************* OPERATIONS*********************************************** */

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "Radhe Radhe"
let str2 = " Kanha"

let str3 = str1+str2
console.log(str3);

// .................................................................//

console.log("1" + 2); // Output : 12
console.log(1 + "2"); // Output : 12
console.log("1" + 2 + 2); // Output : 122
console.log(1 + 2 + "2"); // Output : 32

// console.log(true);   // Output: true
// console.log(+true); // Output : 1
// console.log(true+); //error
// console.log(+""); // 0
 
//Note : Operator precedence may be required but just for exams
//  when you code for production above type of code is considered as
// very bad practice

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// Note : https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion