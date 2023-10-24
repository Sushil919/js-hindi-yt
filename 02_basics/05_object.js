 //object ka discussion hi future me banega API ka discussion

 //Destructure of Objects
 //.....React padhenge to object milega...U object ko destructure karke uski values leni padegi
 //\\Direct v le sakte hain values ko bu detructuring is bit easy

 const course = {
    courseName : "JS in hindi",
    courePrice : "999",
    courseInstructure : "Hitesh Sir"
 }
//course.courseInstructure 

//access kar sakte hain bilkul shi hai ya Square notation v padh sakte hain

// When we need clean code to above access karne ke liye 3 times likhna padega
//Ek aur syntax hain -Syntactical sugar aap kare na kare par bohot log karte hain

const {courseInstructor} = course 
console.log(courseInstructor);


