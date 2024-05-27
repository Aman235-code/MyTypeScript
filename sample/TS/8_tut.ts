// union
let userId: string | number = "u4uwv8bbv";
userId = 473747;
userId = "74ubh48b";
// userId = true  // error
// userId = true;  (after dding boolean)
function displyUserId(userId: string | number): string | number {
  console.log(userId);
  if (typeof userId === "string") {
    console.log(userId.toUpperCase());
  }
  return userId;
}

console.log(displyUserId(userId));

let myArray: (string | number)[] = ["one", 1, 2, "two"];
