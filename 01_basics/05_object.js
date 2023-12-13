// 1. object as parameter
// function createUser({ name: string, paid: boolean }) {}
function createUser(usr) { } // better way
createUser({ name: "Rama", paid: true });
var courseOne = { name: "TypeScript", price: 399 };
function createCourse() {
    return courseOne;
}
var userAccount = {
    _id: 1,
    name: "Priyaranjan",
    email: "priyaranjanmantri@gmail.com",
    active: true,
};
// userAccount._id = 10; // will throw error due to readonly.
userAccount.email = "priyaranjan@email.com";
