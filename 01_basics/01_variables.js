const accountId = 144553
let accountEmail = "tanvi@google.com"
var accountPassword = "12345"
accountCity = "Delhi"

// accountId = 2  // changes not allowed

console.log(accountId);
accountPassword = "21212121"
accountCity = "jaipur"
/*
prefer not to use var
beacause of issue in block scope and functional scope  
*/
console.table([accountId,accountEmail,accountPassword,accountCity])