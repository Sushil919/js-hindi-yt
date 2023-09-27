// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

// ............................................................................................................................

/* Note : The reason is that an equality check == and compariions > , < , >= , <= work differently.
 Comparisons convert null to a number, treating it as 0
 That's why (3) null >= 0 is true and (1) null > 0 is false.*/

 console.log(undefined == 0); 
 console.log(undefined > 0);
 console.log(undefined < 0);

 //Note : Try to avoid above type of conversion coz ye kabhi bhi confusion me daal sakte hain

 //Clean Code ki value hai usi ko use karte hain

 // //======================//
 console.log("2" === 2);