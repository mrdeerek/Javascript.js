//if

const isUserloggedIn = true
const temperature = 12

// if(temperature < 50){
//     console.log("executed");
// }

// if(temperature > 5){
//     console.log("not executed");
// }

// if(temperature <= 15){
//     console.log("not executed");
// }

// if (temperature === 41){
//     console.log("less then 50")
// } else {
//     console.log("temperature is greater than 50")
// }

// <, >, <=, >=, ==, !=, ===(value ke saath saath type bhi check karta hai ===)  

// const score = 200

// if( score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`); // this is a block code

//const balance = 1000

//if (balance > 500) console.log("test"),console.log("test2"); //aise bilkul bhi nahi karna hai 

// if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 750) {
//     console.log("less than 750")
// }else if (balance < 900){
//     console.log("less than 750")
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2 == 3){
    console.log("Allow to buy a course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}