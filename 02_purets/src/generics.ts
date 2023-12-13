const score: Array<number> = []
const names: Array<String> = []

// it same as Any but there is one good features than 
// Any i.e. when we are assign data type it will locked with
// that data type.
function identity<Type>(val: Type): Type {
    return val
}

// same as above with shortcut Type = T
function identityReplica<T>(val: T): T {
    return val
}

const res = identity(3)
console.log(typeof res);

//* with interface

interface Bootle {
    brand: string
    type: number
}

let btl = identityReplica<Bootle>({
    brand: "Boat",
    type: 1001
})

//* with functions

function getSearchProduct<T,>(products: T[]): T {
    // it will extract a value from products 
    // then return only one product
    return products[1];
}

// convert above to arrow function
const getMoreSeatchProducts = <T>(products: T[]): T => {
    return products[1];
}