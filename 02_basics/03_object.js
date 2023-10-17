//object literals
//Literal ki tarah declare karte hain to singleton nhi banta...constructor se humesha singleton banega
// const JsUser = {} //empty object

// const JsUser = {
//     name:"Keshav"
// } //here we can define both keys and values unlike array

//object : Declaration

const JsUser = {
    full_name : "Shri Nivas",
    age : 19,
    location : "Venkatesh",
    email : "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}
console.log(JsUser.email); //access the object