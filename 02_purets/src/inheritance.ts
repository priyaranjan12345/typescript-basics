// * inheritance

class User {
    constructor(
        public email: string,
        public name: string,
        public readonly country: string = "India",
        private city: string = "Bengaluru"
    ) { }

    display() {
        console.log("city: ", this.city);
    }
}


class SubUser extends User {
    // private super member can not accessable
    email: string = "child@email.com"

    display() {
        console.log("email: ", super.email, "\nname: ", this.name);
    }
}

export { }