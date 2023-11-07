//Higher order Array loops
//Array specific loops

//for of 

// ["","",""]
// [{},{},{}] //Ye boht common scenario hai ki array ke andar aapko boht saare objects milenge
                //aur har iteration me aapko objects me se koi value nikalni hai
//Pehle loop lagaiye fir object ke andar jayiye ....fir . notation ya [] notation se ek value le aayiye

const arr = [1, 2, 3, 4, 5]

for (const num of arr) //ab ye jo iteraror of object hai isse don worry ...aisa nhi h ki ye 
                                // loop object ke liye hi kaam aata hai....loop, loop hai --> kisi ka v iterator ho skta hai..
//Objects, Array, String sare iteratable hain..unpe loops laga sakte hain

{
//   console.log(num);  
}

const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//Map
const map = new Map() //Map apne aap me ek object h, JS me sab kuch hi object hai

map.set('IN',"India")
map.set('USA', "United state of America")
map.set('Fr', "France")
map.set('IN', "India") //Duplicate value nhi aati..unique values are there in map
console.log(map); //Order me rehti hain

// for (const key of map) {
//     // console.log(key);   //Pura ka pura Array print ho rha hai 

    

// }
// We want to print value with key then
for (const [key, value] of map) {
console.log(key, ':-' ,value); //Array destructured


}