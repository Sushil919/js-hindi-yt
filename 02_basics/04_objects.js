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
// const obj3 = {obj1, obj2} //Prob : obj ke andar aa rha

//const obj3 = Object.assign({},obj1,obj2)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);  

//Objects within Array

const users = [
    {
        id: 1,
        email: "K@gmail.com"
    },
    {
        id: 1,
        email: "K@gmail.com"
    },
    {
        id: 1,
        email: "K@gmail.com"
    }   //Array ke andar boht saare object hain inko loop through karna hai
        //ya value print karni hai
]
users[1].email
console.log(regularUser);
console.log(Object.keys(regularUser)); //saari keys ko liya aur ek array me rakh diya 
                                        //uspe loop laga sakte ahin , kai jagah kaam me le sakte hain

console.log(Object.values(regularUser));