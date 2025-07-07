// types of memory -> stack and heap
// stack -> primitive 
// heap -> non-primitive

// -------Primitive
let myFriendName = "rita"
let anotherName = myFriendName;
anotherName = "geeta"
console.log(anotherName); // geeta
console.log(myFriendName); // rita

// --------Non-primitive
let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
// --------memory
// stack ->
// ____________________
// |__________________|
// |____userTwo_______|-------------------------------
// |_____userOne______|--------------------------   /
// |___anotherName____|                        /   /
// |__myFriendName____|                       /   /
//                                           /   /
// heap ->                                  /   /
// ___________________________________     /   / 
// |                                 |    /   /
// | {                               | <-/   /
// |   email:"user@google.com",      | <----/       both refer to same object [no copy is made so if we make changes in userTwo , userOne also affect]
// |   upi:"user@ybl"                |
// | }                               |
// |_________________________________|

userTwo.email = "John@google.com"
console.log(userOne.email); //"John@google.com"
console.log(userTwo.email); //"John@google.com"

// userOne email also changes because userTwo is the ref of it in the heap also : this will user@google.com be updated by John@google.com
