 //object ka discussion hi future me banega API ka discussion

 //Destructure of Objects
 //.....React padhenge to object milega...U object ko destructure karke uski values leni padegi
 //\\Direct v le sakte hain values ko bu detructuring is bit easy

 const course = {
    courseName : "JS in hindi",
    coursePrice : "999",
    courseInstructure : "Hitesh Sir"
 }
//course.courseInstructure 

//access kar sakte hain bilkul shi hai ya Square notation v padh sakte hain

// When we need clean code to above access karne ke liye 3 times likhna padega
//Ek aur syntax hain -Syntactical sugar aap kare na kare par bohot log karte hain

const {courseInstructor : instructor} = course //destructure kar diya
// console.log(courseInstructor);

console.log(instructor); //Output nhi aa rha abhi : undefined aa rha

//JSON API : Apna kaam kisi aur ke sir pe dena
//JSON Object hi hota hai, uska koi naam nhi hota
// {
//     "name" : "hitesh"
//     "coursename" : "JS in hindi"
//     "price" : "free"
// }

//kai baar API Array ke format me milti hain
[
    {},
    {},
    {}
]

