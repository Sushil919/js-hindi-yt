function sayMyname(){
    console.log("K");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("V");
}
sayMyname //kuch nhi aaya...coz its just reference....() laga ke execution hota hai

function addTwoNumbers(number1, number2){ //Parameters{When defining}
    console.log(number1+number2);
}
//addTwoNumbers(3,4)
//addTwoNumbers(3,"4") //string soch ke concat kar diya
// addTwoNumbers(3,"a") //string soch ke concat kar diya

//addTwoNumbers(3,null)//Arguements {when calling}