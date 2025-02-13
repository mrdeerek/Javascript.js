
let a = 300 //for global scope
if(true) {
    let a = 10; //for block scope
    const b = 30;
    var c = 30;
    //console.log("INNER:", a); //for block scope
    

}

//console.log(a)
// console.log(b)
//console.log(c)

//nested scope

function one(){
    const username = "Kunal"

    function two(){
        const website = "youtube"
        //console.log(username);//chota wala bade wale ko access kar sakta hai.
        
    }
    //console.log(website);
    
    two()
}

//one()

if (true) {
    const username = "Kunal"
    if (username === "Kunal") {
        const website = " youtube"
        console.log(username + website);
        
    }
    //console.log(website);
}

//console.log(username);

//++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++


console.log(addone(5))
function addone(num) {
    return num + 1

}
 
//or
console.log(addTwo(5));

const addTwo = function(num) {
    return num+ 2
}



