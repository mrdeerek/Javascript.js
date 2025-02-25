const user = {
    username: "Kunal",
    loginCount: 8,
    signedIn: true,


    getuserDetails: function(){
        //console.log("Got user details from database"); 
        //console.log(this)  
    }
}    

//console.log(user.username);
//console.log(user.getuserDetails());
//console.log(this);

// const promiseOne = new Promise()
// const data = new Date()
// new is constructor function (it allows to make multiple instance from one literal)

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this ,greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("Kunal", 13, true)
const userTwo = new User("ChaiAurCode", 15, false)
console.log(userOne.constructor);
//console.log(userTwo);

//jab bhi hum new keyword use karte hai toh sabse pehle empty object create hota hai jisko instance bola jata hai.
//2nd ek constructor function create hota hai