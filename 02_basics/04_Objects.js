// const tinderUser = new Object()  or 
// const tinderUser = {}
// console.log(tinderUser); //{}
// tinderUser.id = "132abc"
// tinderUser.name = "sammy"
// tinderUser.isLoggedIn = false
// console.log(tinderUser); //ode 02_basics/04_Objects.js

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname:"tanvi",
//             lastname:"handa"
//         }
//     }
// }
// console.log(regularUser);
/*{
  email: 'some@gmail.com',
  fullname: { userfullname: { firstname: 'tanvi', lastname: 'handa' } }
}*/
// console.log(regularUser.fullname.userfullname.firstname); //tanvi

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// const obj3 = {5:"a",6:"b"}

// const obj4 = {obj1,obj2} 
// console.log(obj4); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj4 = {...obj1,...obj2}
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } | easrier syntax than Object.assign

//array of object

// const ArrObj = [
//     {
//         name:"tannu",
//         age:16
//     },
//     {
//         name:"manya",
//         age:20
//     },
//     {
//         name:"riya",
//         age:24
//     }
// ]
// console.log(ArrObj);
// console.log(ArrObj[1].age); //20

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '132abc', 'sammy', false ]
// console.log(Object.entries(tinderUser));  //[ [ 'id', '132abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLOggedIn')); //false | spelling mistake 
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
