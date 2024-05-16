// null, undefined, Any
var username = null; // intentional absence of value (only one value)
// console.log(username);
// console.log(typeof username); // object
// undefined - default value of uninitialized variable
var userpassword;
// console.log(userpassword); // undefined
if (username) {
    console.log("true");
}
else {
    console.log("false"); // false
}
if (userpassword) {
    console.log("true");
}
else {
    console.log("false"); // false
}
// Any - skip type checking
var networkData = {
    productName: "Samsung tv",
    price: 7373,
    desc: "this is any type of the data",
};
console.log(networkData.productName);
console.log(networkData.isActive);
