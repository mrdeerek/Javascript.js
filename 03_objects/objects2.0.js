//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id ="123ab"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
 
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kunal",
            lastname: "raj"
        }
    }
}

//console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//onst obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "k@gmail.com"
    }
]


users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log()

