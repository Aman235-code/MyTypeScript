// string, number, boolean

// explicit annotate
let username: string = "Uttam";
// username = 2345; // error
// username.toUpperCase(); // you can use these string functions

// implicit annotate
let userage: number = 89;
let salary: number = 37373.788;
let password = "abc@123";

let address: string;
// address = 123; // error
address = "1st street";

let isActive: boolean = true;
// isActive = 676; // error

// console.log(typeof username);
// console.log(typeof userage);
// console.log(typeof password);
// console.log(typeof address);
// console.log(typeof isActive);

let useremail = "abc@gmail.com";
let userDetailDesc = `User is a programmer, email id is ${useremail} name is ${username}`;
// console.log(userDetailDesc);
