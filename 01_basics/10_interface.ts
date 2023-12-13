interface User {
  readonly uid: number;
  email: string;
  handleSuccess(): string; //? same as 'handleSuccess: () => string'
  getCouponCode(code: string): number;
}

//* re-opening of interface
//* it means adding a new property to existing class
//! a type can not be changed after declar
interface User {
  githubToken: string
}

//* inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const newUser: Admin = {
  uid: 10,
  email: "anymail@email.com",
  handleSuccess: () => {
    return "success payment";
  },
  getCouponCode: (code: "JS10") => {
    return 100
  },
  githubToken: "snvsndnsoifiot",
  role: "admin"
};



export { };
