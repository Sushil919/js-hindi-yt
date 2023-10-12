// Dates

let myDate = new Date()
// console.log(myDate); // not readable

// //lets convert it into string
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

//lets check the type of date

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //comparison humesha milisec me kariyega
// **********************************************************************************
// very imp to convert in seconds

// console.log(Date.now()/1000); //but isse decimal me ja rha

// console.log(Math.floor(Date.now()/1000));

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%Some New METHOD%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //+1 karte ain ki end user confusena ho
console.log(newDate.getDay());
