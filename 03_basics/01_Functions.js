// function greet(){
//     console.log("hello everone, how are you all?");  
// }
// greet();

// function greet1(name){ //parameters
//     return "hello, " + name ;  
// }
// console.log(greet1("tanvi")); //arguments


// function greet1(name){ //parameters
//     return "hello, " + name ;// we can also use string interpolaiton[`hello ${name}`] here
//     console.log("hello"); // not execute [return line should be last line]
        
// }
// console.log(greet1("tanvi")); //arguments

// function calculateCartPrice(...num1){ // val1,val2,...num1 -> [500,300] | 200 and 400 store in val1 and val2
//     return num1
// }
// console.log(calculateCartPrice(200,400,500,300));

const user = {
    username:'rita',
    age:22
}
function handleObject(anyObject){
    console.log(`Usernmae is ${anyObject.username} and age is ${anyObject.age}`);
}
console.log(user);
