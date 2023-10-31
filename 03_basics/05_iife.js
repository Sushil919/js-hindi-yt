//Immediately Invoked Function Expression (IIFE) 
//Global Scope ke pollution se problem hoti h kai baar

(function chai(){
    console.log(`DB Connected`);
}) ()

//TO Global Scope me jitne variable ahain ..jo bhi pollution hai,,
//usko hatane ke liye, we use IIFE