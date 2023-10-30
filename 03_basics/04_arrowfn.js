const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //current context ko refer karne ke liye "this" keyword lagate hain
    }
}