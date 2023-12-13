// 1. object as parameter
// function createUser({ name: string, paid: boolean }) {}

type User = { name: string; paid: boolean };
function createUser(usr: User) {} // better way

createUser({ name: "Rama", paid: true });

// 2. return object type better way

// function createCourse(): {name: string, price: number} {
//   return { name: "JavaScript", price: 399 };
// }

// or in better way type aliases

type course = {
  name: string;
  price: number;
};

let courseOne = { name: "TypeScript", price: 399 };

function createCourse(): course {
  return courseOne;
}

// 3. object type

type Account = {
  readonly _id: number;
  name: string;
  email: String;
  active?: boolean; // make it nullable with "?"
};

let newAccount: Account = {
  _id: 1,
  name: "Priyaranjan",
  email: "priyaranjanmantri@gmail.com",
  active: true,
};
// newAccount._id = 10; // will throw error due to readonly.
newAccount.email = "priyaranjan@email.com";

// 4. multi type
type cardDate = {
    date: string
}

type cardNumber = {
    cardNum: string
}

type cardDetails = cardDate & cardNumber & {
    cvv: string
}

export {}