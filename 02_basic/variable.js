const accountId = 1234
var accountName = "amazon"
let accountGmail = "amazon@gmail.com"
accountPassword = "121212"
let accountState ;// -> result undefined 

//accountId = 4321 not change error occur 
console.log(accountId);
accountName = "google"
accountGmail = "google@gmail.com"
accountPassword = "0011"
console.table([accountId,accountGmail,accountName,accountPassword,accountState]);
// values are change 