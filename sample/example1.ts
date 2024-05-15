// ------------------------
// type information is provided while declaring variable
console.log("Type script is working");
let namess: string = "aman";

// if we assign another type data to ns then we get an error
console.log(namess);
// ns = 1234; // error

// ----------------------------
let objects = {
  name: "aman",
  addess: "aaa",
};

console.log(objects);
// console.log(obj.address); // error

// ----------------------------
class Test {}
let obj: Test = new Test();
