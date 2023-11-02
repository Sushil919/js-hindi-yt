// const month = "March"
// switch(month){
//     case "Jan" :
//         console.log("Jan");
//         break;

//     case "Feb" :
//         console.log("Feb");
//         break;

//     case "March" :
//         console.log("March");
//         break;               //break nhi hai to : condt ke baad ke saare cases execute ho jate hain
//                                 //except default case

//     case 4 :
//         console.log("Apr");
//         break;

//     case 5 :
//         console.log("May");
//         break;

//     default :
//         console.log("Default case run");
// }


const userEmail = []

if(userEmail) //kuch condt check nhi kiya
                //empty string is considered as a false val
{
    console.log("Email id authenticated"); //email hone ki wajah se its getting executed
}
else
console.log("Id not authenticated"); //empty hone ki wajah se false value

//Falsy Values : false, 0, -0, BigInt 0n, "", null, NaN

//Truthy Values : "0", 'false', " ", [], {}, Function[]{}

// if (userEmail.length === 0){ //Arrays ko check
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// false == 0  //true
// false == '' //true
// 0 = '' //true

//************************************************************* */
//Nullish Coalescing Operator (??) : null undefined
 
// let val1 = 5 ?? 10
// let val1 = null ?? 10 
let val1 = undefined ?? 15 //ye operator null & undefined ke liye hi bana hai


// ye new operator --> agar null value aai hai to uskasafety check karta hai
//null ke basis pe ho sakta hai kuch program run na kare ya kuch aage ja ke prob aa jaye

console.log(val1);

//kai baar jab database se call karenge, firebase ka use karenge, AppWrite ka use karenge
//..to directly response nhi milta hai-> do values milti hain
//ho sakta hai null value aa jaye ya ho sakta hai response aaye hi na undefined aa jaye
//to us case me pura ka pura code structure pareshan ho sakta hai 