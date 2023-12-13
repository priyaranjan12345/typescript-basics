function getUpperCase(str: string): string {
  return str.toUpperCase();
}

console.log(getUpperCase("hello"));

// arrow function with default value
let loginUser = (username: string, pin: number = 1111) => {
    console.log("username: ", username, "\npin: ", pin);
}

loginUser("hello@email.com")

export {};
