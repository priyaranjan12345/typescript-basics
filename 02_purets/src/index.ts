// * Class

// class User{
//     email: string
//     name: string
//     readonly country: string = "India"
//     private city: string = "Bengaluru"

//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }

//     display() {
//         console.log("city: ", this.city);
//     }
// }

class User {
    // same as above class
    constructor(public email: string, public name: string) {
        this.email = email;
        this.name = name;
    }
}
const userObj = new User("ram@gmail.com", "Ram");
// userObj.country = "any country" // can not change due to readonlt

// * Getter Setter
class Fruits {
    private price: number = 100;

    get getApple(): string {
        return `apple ${this.price}`;
    }

    set setApple(price: number) {
        if (price < 1) {
            throw new Error("Can not be 0 or lesser than 0");
        }

        this.price = price;
    }

    private deleteToken() {
        console.log("token deleted");
    }
}

const fruits = new Fruits();
console.log(fruits.getApple);

export {}