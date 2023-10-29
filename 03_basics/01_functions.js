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

// function addTwoNumbers(number1, number2){
//     //let result = number1+number2
//     console.log(Keshav);
//     return number1+number2
// }

//const result = addTwoNumbers(3,4)
//console.log("Result : ",result) //result me value return ho rhi hai

function loginUserName(username = "Krishna"){ //ab undefined ho hi nhi sakta
    if (!username) // same as username === undefined
    {
    console.log("Please Enter username");
return}
    return `${username} just logged in !!`
}
// loginUserName("Keshav") //did not print this value or stored in any variabl.....just passed the arguement
//  console.log(loginUserName("Parth"));

console.log(loginUserName("Radhika")); //ye function definition ko bhi overwrite kar dega