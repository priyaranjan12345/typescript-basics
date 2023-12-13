// ENUMS 🎊
const enum SeatChoice { // put const will not generate unwanted code
    AISLE = 1222, // we can assign any type of value // default value is 0 
    MIDDLE = 1333, // default value is 1 ... and so on
    WINDOW = "1444"
}

const userSeatChoice = SeatChoice.AISLE;