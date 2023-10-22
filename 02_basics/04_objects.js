//Object part 2
//Singleton : how can we declare with help of constructor

// const tinderUser = new Object() //singleton
// console.log(tinderUser); //empty object

// const tinderUser = {} //non singleton

// tinderUser.id = "554353"
// tinderUser.name = "Keshav"
// tinderUser.isLoggedIn = false
// console.log(tinderUser); //empty object


//nested object
const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname:{
            firstname: "Keshav",
            lastname: "Yaduvanshi"
        }
    }
}
//console.log(regularuser.fullname.userfullname); //nested object

//Combine objects like array
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {obj1, obj2}
console.log(obj3); //Prob : obj ke andar aa rha 
