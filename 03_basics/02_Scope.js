// // var c = 300
// //globar scope 
// if(true){  //block scope
//   let a = 10
//   const b = 20
// //   c = 30
// console.log(a); //10
// console.log(b); //20
// }

// // console.log(a); //error
// // console.log(b); //error
// // console.log(c); //30

// // *Note* -> let and const are blocked scope  

//-------nested scope
// function one(){ //this can't access content of two()
//     const username = 'tanvi'
//     function two(){ // this can access username
//         const website = 'youtube'
//         console.log(username)
//     }
//     // console.log(website); // func one cant access content of func two
//     // two() //tanvi
// }
// one()  //when one is execute two is also execute and when we comment two() , nothing will show when we call one() because we console value of one() i.e username inside two()

//+++++++++++++++++++Interesting ques+++++++++++++++++++
// console.log(addone(5)); //6

// function addone(num){
//     return num+1
// }

console.log(addtwo(5)); //error  due to the concept of hoisting
const addtwo = function(num){
    return num+1
}