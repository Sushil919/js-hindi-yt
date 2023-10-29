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
    console.log(website);
    two()
}
one()