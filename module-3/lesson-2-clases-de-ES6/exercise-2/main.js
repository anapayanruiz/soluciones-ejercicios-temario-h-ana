'use strict';


class Square {
    constructor(side) {
        this.side = side;
    }


    perimeter() {
        return this.side * 4;
    }

    area() {
        return this.side * this.side;
    }
}

const room = new Square(1);
const kitchen = new Square(3);
const living = new Square(7);


console.log(room.area());
console.log(room.perimeter());

console.log(kitchen.area());
console.log(kitchen.perimeter());

console.log(living.area());
console.log(living.perimeter());

export default function calculateSquare() {
    class Square {
        constructor(side) {
            this.side = side;
        }


        perimeter() {
            return this.side * 4;
        }

        area() {
            return this.side * this.side;
        }
    }
};