const dwapar_heros = ["madhav", "karn", "arjun", "bheem"]
const treta_heros = ["shriram", "bharat", "bajrangi"]

// dwapar_heros.push(treta_heros)
// console.log(dwapar_heros); //array koi bhi value le leta hai ..pure array ko hi as one element

//access elements
// console.log(dwapar_heros);
// console.log(dwapar_heros[3][1]);

// const allHeros = dwapar_heros.concat(treta_heros)
// console.log(allHeros);

//spread

// const all_new_heros = [...dwapar_heros, ...treta_heros]
// console.log(all_new_heros); 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

//Pooch bhi sakte hain

console.log(Array.isArray("Keshav"));
console.log(Array.from("Keshav"));

console.log(Array.from({name: "hitesh"})); //interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));