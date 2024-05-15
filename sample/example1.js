// ------------------------
// type information is provided while declaring variable
console.log("Type script is working");
var namess = "aman";
// if we assign another type data to ns then we get an error
console.log(namess);
// ns = 1234; // error
// ----------------------------
var objects = {
    name: "aman",
    addess: "aaa",
};
console.log(objects);
// console.log(obj.address); // error
// ----------------------------
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
var obj = new Test();
