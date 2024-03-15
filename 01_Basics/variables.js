//Day 1 - 15/03/24

const accountId = 144553  /*Constants*/
let accountEmail = "adi1423tya@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur" 
let accountState;  //As State Value is not assigned it will provide undefined value

// Prefer not to use Var -->> Because of scope error -->> {--Scope--}  <<--

accountEmail = "ad#ta.com"
accountPassword = "212211"
accountCity = "Bombay"
// accountId = 2  

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);