//Two ways to declare object : literal and constant  

//object.create :: singleton (We'll talk later )

//Literal ki tarah declare karte hain to singleton nhi banta...constructor se humesha singleton banega

//object literals

// const JsUser = {} //empty object

// const JsUser = {
//     name:"Keshav"
// } //here we can define both keys and values unlike array

//object : Declaration

// const JsUser = {
//     full_name : "Shri Nivas",
//     age : 19,
//     location : "Venkatesh",
//     email : "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays : ["Monday", "Saturday"]
// }
// console.log(JsUser.email); //access the object


//another way access the object 
// const JsUser = {
//     "full_name" : "Shri Nivas", //different declaration than previous one
//     age : 19,
//     location : "Venkatesh",
//     email : "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays : ["Monday", "Saturday"]
// }
// console.log(JsUser["email"]); //using square notaion instead . operator

//DataType Symbol
const mySym = Symbol("Key1")
// const JsUser = {
//     "full_name" : "Shri Nivas", //different declaration than previous one
//     age : 19,
//     mySym: "myKey1", //this is not correct syntax to declare symbol
//     location : "Venkatesh",
//     email : "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays : ["Monday", "Saturday"]
// }
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);

//Correct way to declare the symbol
const JsUser = {
    "full_name" : "Shri Nivas", //different declaration than previous one
    age : 19,

    [mySym] : "myKey1", //this is not correct syntax to declare symbol

    location : "Venkatesh",
    email : "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}
console.log(JsUser[mySym]); //access symbol
console.log(typeof JsUser.mySym);

//**Can lock the value : prevent it from getting changed* */
//Object.freeze(JsUser)  //changes wont propogate

