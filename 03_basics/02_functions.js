// function calculateCartPrice(...num1) //...rest operator...sometimes spread operator**depends on situation
// {
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500)); //ab array ke andar add karke mil rha

// function calculateCartPrice(val1, val2,...num1) 
// {
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000)); //starting ki 2 val val1, val2 and rest num1 me chali jayengi



const user = {
    username : "Keshav",
    prices : 199 //is tarah ke method me type object handle kar rhe
                //to type safty check karni hoti hai
}
function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`); 

//jo price extract kar rha hu wo available hai ya nhi object mein ...aur jo value pass kar rhe uska datatype object hai ya nhi hai ..
//TypeScript mein ye type checking ho jati hai waise JavaScript me v ho jati hai...
//bas JS me thoda code jada likhna padta hai ...if,else se check karna padta hai

}
// handleObject(user)
handleObject({
    username : "Parth",
    price : 399
}) //direct object v pass kar sakte the