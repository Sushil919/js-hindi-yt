const score = 200

if (score >  100){

const power = "fly"  //scope of fly is local
console.log(`user power : ${power}`);

}
console.log(`user power : ${power}`); //Error , cant access fly bcoz its in the scope of if