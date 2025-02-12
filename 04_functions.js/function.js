function sayMyName(){
    console.log("K");
    console.log("U");
    console.log("N");
    console.log("A");
    console.log("L");
}

//sayMyName() //parenthesis lagaienge toh uwo uska hoga execute
            // parenthesis nahi lagaenge toh wo hoga uska reference.


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

// addTwoNumbers(3, 4)

//or

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2;
//     console.log("kunal")
//     return result;
// }

// const result = addTwoNumbers(3, 5)
// console.log("result: ",result)

//or

function addTwoNumbers(number1, number2){
    return number1 + number2;
}

const result = addTwoNumbers(3,4)
//console.log("result:", result)

function loginUserMessage(username = "Kashu") {
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in` 
}

//console.log(loginUserMessage("kunal"))

function calculateCartPrice(...num1) {
    return num1
}

//console.log(calculateCartPrice(2));
 console.log(calculateCartPrice(200, 400, 600))
 const user = {
    username: "kunal",
    price: 199
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }

//handleObject(user)
//pass any object method
handleObject({
    username: "sam",
    price:399
})
//pass any array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){

    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(200,400,600,800,1000));