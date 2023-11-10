const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) //callback function: name nhi likhna hai function ka
// {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// }
// )

const myCoding = [ //Iske uppar iteration seekhenge coz, Database me array se jo value aati hai wo Array ke format me aati hai aur har ek value ek objet hi hota hai
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "pthon",
        languageFileName: "python"
    }
]

//forEach loop laga do
myCoding.forEach( (item) => {

    console.log(item.languageName); //Array ke andar jo objects hain jo apne aap me complex chiz hai uska access 2 min me le liya
})