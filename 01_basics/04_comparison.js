// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

// ............................................................................................................................

/* Note : The reason is that an equality check == and compariions > , < , >= , <= work differently.
 Comparisons convert null to a number*/