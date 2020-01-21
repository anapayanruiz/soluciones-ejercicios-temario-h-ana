'use strict';


class Square {

    perimeter(side) {
        return side * 4;
    }
    area(side) {
        return side * side;
    }
}

const room = new Square();

const roomPerimeter = room.perimeter(9);
const roomArea = room.area(9);
console.log(roomPerimeter);
console.log(roomArea);
console.log(room.perimeter(9), room.area(9));