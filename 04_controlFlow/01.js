// const score = 200

// if (score >  100){

// const power = "fly"  //scope of fly is local
// // console.log(`user power : ${power}`);

//}
// console.log(`user power : ${power}`); //Error , cant access fly bcoz its in the scope of if

// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2"); //bad practice: comma laga ke ek hi line me likh dena

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy a course");
}