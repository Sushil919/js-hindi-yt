
//"arrow function me this nhi hota hai" ...Kyu nhi hota hai ...agar hota hai to kya refer karta hai
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //current context ko refer karne ke liye "this" keyword lagate hain
        console.log(this); //this jo v current values hain unki baat karta hai..current context ki baat karta hai
    }
}
user.welcomeMessage() //value is not hardquoted,,,,,jo bhi current context hai us current context me username ke andar jo bhi value hai...usko print karo
user.username = "Madhav" //context me madhav ho gya
user.welcomeMessage()