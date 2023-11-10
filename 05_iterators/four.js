const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//    console.log(key); //key aa gyi hain
// value ke liye
// console.log(`${key} shortcut is for ${myObject}`);

}

//forin kya array pe kaam aa sakte hain

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); 
    
    //only keys aa rhi hain ...foreach mein seedha value hi utha rha tha
    //Array ki bhi keys hoti hain..Jab documentation padhenge..then pta lagega ki Object ak design hi isliye hua tha ki, Array ki jo keys hoti hai wo 0 se start hoti hain aur bydefault number hi hoti hain

    //keys se value kaise nikale
  //  console.log(programming[key]); 

    //loops ke andar yhi diff ahi ki kisme keys aati ahin aur kisme values aati hain
}

const map = new Map() //Map apne aap me ek object h, JS me sab kuch hi object hai

map.set('IN',"India")
map.set('USA', "United state of America")
map.set('Fr', "France")
map.set('IN', "India") //Duplicate value nhi aati..unique values are there in map
// console.log(map);

for (const key in map){
console.log(key); //Maps ke upar iteration nhi kar sakte
}