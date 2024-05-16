// explicit annotate
var username = "Uttam";
// username = 2345; // error
// username.toUpperCase(); // you can use these string functions
// implicit annotate
var userage = 89;
var salary = 37373.788;
var password = "abc@123";
var address;
// address = 123; // error
address = "1st street";
var isActive = true;
// isActive = 676; // error
// console.log(typeof username);
// console.log(typeof userage);
// console.log(typeof password);
// console.log(typeof address);
// console.log(typeof isActive);
var useremail = "abc@gmail.com";
var userDetailDesc = "User is a programmer, email id is ".concat(useremail, " name is ").concat(username);
console.log(userDetailDesc);
