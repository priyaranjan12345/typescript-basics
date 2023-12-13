// with help of union we can assign multiple data type
let score: number | string = 33;
score = "44";

//2. union with objects
type User = {
  name: string;
  age: number;
};

type Admin = {
  id: number;
  username: string;
};

let newUser: User | Admin;

newUser = {
  name: "priyaranjan",
  age: 24,
};

console.log(newUser.name);

//3. union with function
// union narrowing
function getUserId(id: string | number): string | number {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  if (typeof id === "number") {
    return id + 10;
  }

  return "default";
}

//4. union with array
const data: string[] | number[] = [1, 2, 3, 4, 5, 6]; // either all number or all string. No mixed allowed
const data1: (string | number | boolean)[] = [true, 1, 2, 3, 4, "5", "6"]; // it allows mixed elements

const users: (string | number)[][] = [
    ["priyaranjan", 1],
    ["debadata", 2],
  ];

//* as array push, shift and unshift is a bad things
//* avoid by using const and readonly

//5. union with string
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "middle"
// seatAllotment = "crew" //will give error 