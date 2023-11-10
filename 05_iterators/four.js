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
    console.log(programming[key]); 

    //loops ke andar yhi diff ahi ki kisme keys aati ahin aur kisme values aati hain
}
