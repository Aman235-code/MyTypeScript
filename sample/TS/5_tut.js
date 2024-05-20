// Array - ordered list of data
var numbers = [12, 45, 67, 21];
// console.log(numbers);
// console.log(numbers[0]); // 12
// console.log(numbers[2]); // 67
numbers[1] = 4657;
// console.log(numbers);
var friends;
friends = ["gautham", "asutosh", "kavish"];
// console.log(friends);
// console.log(friends[2]);
// friends[2] = true // error
// console.log(friends.length); // 3 - length
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }
// push
var newLength = friends.push("Raju");
// console.log(newLength); // 4
// console.log(friends);
// console.log(typeof numbers); // object
// console.log(typeof numbers[0]); // number
// console.log(typeof friends[0]); // string
// console.log(friends.join("...."));
// friends.forEach((value) => {
//   console.log(value.toUpperCase());
// });
// let newFriends = friends.map((value, index) => {
//   console.log(value);
//   console.log(index);
//   return value.toUpperCase();
// });
// console.log(newFriends); // gives a new array
var mixed; // union
mixed = ["one", "two", "three", 56.6457, 78.336];
mixed.forEach(function (value) {
    //   console.log(value.toUppercase()); // error
    if (typeof value == "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
});
console.log(mixed);
