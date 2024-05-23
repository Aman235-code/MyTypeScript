// functions
// set of statements written for doing a specific task
// functions has name and block of code (statements) & take parameters and can return values
// in ts type of parameters and return type is most important thing
// function creation
// formal parameters
function ramu(rs: number, name: string): number {
  console.log("hello sir, what can i do for you?");
  console.log(rs);
  console.log(name);
  return 4;
}

// function call
// actual parameters
let num = ramu(12, "left");
console.log(num);
ramu(15, "center");
// ramu("hi"); // error
