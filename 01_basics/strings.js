const name = "Kunal"
const repoCount = 50

//console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo is ${repoCount}`)

const gameName = new String('kunalkg')
console.log(gameName)

//if we want to access the key then
console.log(gameName[0]);

//if we want to access prototype then
console.log(gameName.__proto__);

//if we want to find its length then
console.log(gameName.length);
console.log(gameName.toUpperCase());

//if we want to know the position of any character then
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4);
console.log(newString)

//+++++++++++++++++++++++ Trim And Replace ++++++++++++++++++++++++

const newStringOne = "   kunal    ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://kunal.com/kunal%25raj"

console.log(url.replace('%25', '-'))

console.log(url.includes('kun al'))