// const score = 400 // Automatically detects the data type
// console.log(score);

// const balance = new Number(100) //defined new object of type number
// console.log(balance);

// //Lets make it string

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


//When we need to print precised value while writing code for ecom app
// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //output acc US Std.
// //Specify to Indian num system
// console.log(hundreds.toLocaleString('en-IN'));

//Maths Library

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));


// console.log(Math.random);
// console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1)) + min);

