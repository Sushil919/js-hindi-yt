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


const userEmail = "parth@google.com"

if(userEmail) //kuch condt check nhi kiya
                //String is considered as a truthy val
{
    console.log("Email id authenticated"); //email hone ki wajah se its getting executed
}
else
console.log("Id not authenticated");