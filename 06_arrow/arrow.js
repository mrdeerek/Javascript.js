const user= {
    username: "Kunal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Kunal"
//     console.log(this.username);
    
// }

// chai()

const chai = () => {  // bas arrow function itna me hi work karta hai (=>)
    let username = "hitesh"
    console.log(this);
    
}

//chai()

// syntax of arrow function
//() => {} 


// const addTwo = (num1, num2) => { //{} bracket use karenge to return use karna hi padega
//     return num1 + num2
// }

// console.log(addTwo(3,5));

//or
// const addTwo = (num1, num2) => num1 + num2 //() ye bracket use karenge toh return use nahi karna padega

// console.log(addTwo(3,5));

//agar hume object koreturn karna ho toh

const addTwo = (num1, num2) => ({username : "Kunal"}) //yaha pe object wrap hua hai 

console.log(addTwo(3,4));
