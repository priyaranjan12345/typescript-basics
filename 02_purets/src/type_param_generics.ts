//* 1.
function processResult<T, U>(val1: T, val2: U): object {
    return {
        val1,
        val2
    }
}

processResult("a", 10)

//* 2. restricting type
interface Database {
    connection: boolean
    username: string
    password: string
}

function processResult1<T, U extends Database>(val1: T, val2: U): object {
    return {
        val1,
        val2
    }
}

function processResult2<T, U extends number>(val1: T, val2: U): object {
    return {
        val1,
        val2
    }
}

// second param should expect a number
processResult2("A", 1)

//* 3. keyof

function processResult3<T, U extends keyof T>(val1: T, val2: U): object {
    return {
        val1,
        val2
    }
}

//* 4. with class
interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string
    auther: string
    subject: string
}

class MyCart<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}

const cartQuiz = new MyCart<Quiz>()
cartQuiz.addToCart({
    name: "Java",
    type: "meduim"
})

const cartCourse = new MyCart<Course>()
cartCourse.addToCart({
    auther:"priyaranjan",
    name: "Priyaranjan M",
    subject: "TypeScript"
})

export {}