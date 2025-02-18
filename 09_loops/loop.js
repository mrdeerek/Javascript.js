 // for of

 ["", "", ""]// any strings
 [{}, {}, {}] // for any object

 const arr = [1, 2, 3, 4, 5, 6]

 for (const num of arr){
    console.log(num);
    
 }

 const greeting = "Hello World"

 for( const greet of greeting) {
    //console.log(`Each char is ${greet}`);
    
 }

 //maps(The map object holds key-value-pairs and remembers the original insertion order of the keys.)

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('FR', "France")

 for (const key in map) {
    console.log(key)
 }

 //console.log(map);
 //map known for its unique value

for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
}
 // for object

 const myObject = {
    'game1': 'NFS', 
    'game2': 'Spiderman'
 }

//  for(const [key,value] of myObject){
//     console.log(key, ':-', value);
    
//  } // it is not working here 



//object ke uper for in loop 
//array ke upar for of loop