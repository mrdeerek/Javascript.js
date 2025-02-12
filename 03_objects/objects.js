//object ki value ko access karne ke liyedot(.) notation use karte hai 

//singleton
//object.create
//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Kunal",
    "full name": "kunal Raj",
    [mySym]: "mykey1", //agar isko symbol ki tarah use karna hai toh square bracket me likhna hoga[]
    age: 18,
    location: "Patna",
    email: "kunal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Kunal@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "uvhdkfvk@gmail.com"
//console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS user")
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
