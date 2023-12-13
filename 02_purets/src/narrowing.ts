//* Narrowing

//* 1.
function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }

    return val + 10
}

//* 2.
function provideUId(id: string | null): string | undefined {
    if (!id) {
        console.log("please provide id");
        return;
    }

    return id + " :uid"
}

interface User {
    name: string
    email: string
}

interface Admin {
    name: string
    email: string
    isAdmin: boolean
}
//* Good practice with interface
function processUser(account: User | Admin): boolean {
    if ("isAdmin" in account) {
        console.log("is admin: ", account.isAdmin);
        return account.isAdmin;
    }

    return false;
}

//* instance of narrowing
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString)
    } else {
        console.log(x.toUpperCase())
    }
}

//* using type predicate
type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food"
    }

    return "bird food"
}

//* 

interface Circle {
    kind: "circle"
    radius: number
}

interface Square {
    kind: "square"
    sides: number
}

interface Rectangle {
    kind: "rectangle"
    length: number,
    widht: number
}

type Shape = Circle | Square | Rectangle

function getShape(shape: Shape): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }

    if (shape.kind === "rectangle") {
        return shape.widht * shape.length;
    }

    return shape.sides ** 2
}

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sides ** 2;
        case "rectangle":
            return shape.widht * shape.length;

        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}

export { }