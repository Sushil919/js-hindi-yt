// let a = 300

// if(true){
//     let a = 30;
//     const b = 40;
//     console.log("INNER: ",a);
// }
// console.log(a);

function one(){
    const username = "Hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //notice : line by line exec hota hai ..ye error de diya..so iske next two() exec hi nhi hua
    two()
}
one()
//**Error se hi seekha jata hai..jitna error ke sath familiar honge utne achhe se development kar payenge */