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
console.log(regularuser.fullname.userfullname); //nested object
