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
//one()
//**Error se hi seekha jata hai..jitna error ke sath familiar honge utne achhe se development kar payenge */

// %%Closure kya hai ye achhe se..DOM (Kaise HTML ki page ko manupulate kiya jata hai javascript ke andar) padhne pe samjh aayega 

if(true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
   // console.log(website);
}
// console.log(username);

//^^^^^^^^^^^^^^^^^^^^^^^ interesting^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

console.log(addone(5));


function addone(num){
    return num+1
}

console.log(addtwo(5)); //ab error aa gya ...declare hone ke baad ek variable me rakh diya hai
const addtwo = function(num){
return num + 2}

