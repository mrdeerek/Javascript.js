//Immediately Invoked Function Expressions (IIFE)
                                                                                     
(function chai() {
    console.log(`DB CONNECTED`)
})();

//about 
// first ()means hum function ki definition likhne wale hai
// second () means hum uska execution dikhane wale hai

//( {} =>)

( function aurcode() {
    console.log(`DB CONNECTED TWO`);
    
}) ();//yaha uper weala ko bnd karne ke liye hume semicolomn lagana padega 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ("Kunal") //do iifi likhne ke liye ek iifi ko bnd karna hoga