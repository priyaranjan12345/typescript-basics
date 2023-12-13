//1. array declaration

const superHeros: string[] = [];
const superPower: Array<number> = [];

superHeros.push("SpiderMan");
superHeros.push("Thor");
superHeros.push("IronMan");

superPower.push(1);
superPower.push(10);
superPower.push(20);

//2. user defined type

type User = {
    name: string
    age: number
}

const users: Array<User> = []

users.push({name: "Rama", age: 24})
users.push({name: "Sita", age: 21})
users.push({name: "Syama", age: 24})

//3. array of array

const matrix: number[][] = [
    [10, 4, 2],
    [6, 3, 8]
]

export {}