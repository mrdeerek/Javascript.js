let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toISOString);
// console.log(myDate.toLocaleDateString);
// console.log(myDate.toLocaleString);
// console.log(typeof myDate);

//one method
//let myCreatedDate = new Date(2025,0,29,15,3);
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());

//2nd method
//let myCreatedDate = new Date("2025-01-29");
let myCreatedDate = new Date("01-29-2025");
//console.log(myCreatedDate.toLocaleString())

//timestamp
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

//`${newDate.getDay()} and the time `

newDate.toLocaleDateString('default' {
    weekday : "long"
})