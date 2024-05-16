// null, undefined, Any
let username: null = null; // intentional absence of value (only one value)
// console.log(username);
// console.log(typeof username); // object

// undefined - default value of uninitialized variable
let userpassword: undefined;
// console.log(userpassword); // undefined
// console.log(typeof userpassword) // undefined

if (username) {
  console.log("true");
} else {
  console.log("false"); // false
}

if (userpassword) {
  console.log("true");
} else {
  console.log("false"); // false
}

// Any - skip type checking (avoid using Any type in ur code)
let networkData: any = {
  productName: "Samsung tv",
  price: 7373,
  desc: "this is any type of the data",
};

console.log(networkData.productName);
console.log(networkData.isActive); // undefined
