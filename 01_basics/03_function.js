"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
console.log("Result: ", add(10));
function getUpperCase(str) {
    return str.toUpperCase();
}
console.log(getUpperCase("hello"));
var loginUser = function (username, pin) {
    console.log("username: ", username, "\npin: ", pin);
};
loginUser("hello@email.com", 1234);
