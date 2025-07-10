// Singleton 
// Object.create
//object literals
const MySym = Symbol("Key1") //make symbol as a key
const JsUser = {
    name: "tanvi",
    age: 18,
    [MySym]: "mykey1",
    location: "tanvi@google.com",
    isLoggedIn: false,
    lastLoginDats: ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[MySym]);

// JsUser.email = "tanvi@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "tanvi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
console.log(JsUser.greeting); //undefined
console.log(JsUser.greeting()); //hello js user
JsUser.greetingtwo = function(){
    console.log(`hello js user ${this.name}`); //current object
}
console.log(JsUser.greetingtwo()); //hello js user tanvi