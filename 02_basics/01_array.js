// array

const myArr = [0, 1, 2, 3, 4, 5]

//Another way to declare an array
const myHeros = ["Keshav", "Parth"]

//declare and initialize with values

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[0]);

// Array Methods

// myArr.push(6);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// myArr.unshift(9); //add at leftmost place by shifting all the values right
// console.log(myArr);
// myArr.shift() //unlike pop it removes the left most
// console.log(myArr);

// console.log(myArr.includes(9)); //to know 9 is included or not boolean type

// console.log(myArr.indexOf(9)); //jo element present nhi hai uske liye -1 aayega

// const newArr = myArr.join()
// console.log(myArr);
// console.log( typeof newArr); //join binds the array changes the type of array to STRING 

//Slice and Splice

// console.log("A ", myArr);
// const myn1 = myArr.slice(1,3) //starting from 1 , 2 Not including 3(last range)
// console.log(myn1);

console.log("B ",myArr);
const myn2 = myArr.splice(1,3) //Original aaray ko hi manipulate karke is range ke elements nikal leta hai

console.log("C ",myArr);
console.log(myn2);