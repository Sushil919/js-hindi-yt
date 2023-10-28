// function sayMyname(){
//     console.log("K");
//     console.log("E");
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("V");
// }
//sayMyname //kuch nhi aaya...coz its just reference....() laga ke execution hota hai

//function addTwoNumbers(number1, number2){ //Parameters{When defining}
   // console.log(number1+number2); //console doesnot mean ki wo fnction value return v kar rha 
//}
//addTwoNumbers(3,4)
//addTwoNumbers(3,"4") //string soch ke concat kar diya
// addTwoNumbers(3,"a") //string soch ke concat kar diya

//addTwoNumbers(3,null)//Arguements {when calling}

function addTwoNumbers(number1, number2){
    let result = number1+number2
    return result
}

const result = addTwoNumbers(3,4)
console.log("Result : ",result) //result me to undefined hai