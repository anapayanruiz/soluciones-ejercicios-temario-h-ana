'use strict';

class Polygon {
    constructor(numberOfSides, base, height) {
        this.numberOfSides = numberOfSides;
        this.base = base;
        this.height = height;
    }


    perimeter() {
        return this.base * this.numberOfSides;
    }

    area() {
        return this.base * this.height;
    }
}

class Rectangule extends Polygon {
    constructor(base, height) {
        super(4, base, height);
        // this.foo = foo;
    }
}

class Square extends Rectangule {
    constructor(base) {
        super(base, base);
        // this.foo = foo;
    }

}




class Triangule extends Polygon {
    constructor(base, height) {
        super(3, base, height)
    }
    area() {
        return super.area() / 2;
    }

}

const cuadrado = new Square(4);
console.log(cuadrado.area());
const triangulo = new Triangule(4, 3);
console.log(triangulo.area());
console.log(triangulo.perimeter());

const poligono = new Polygon(6, 4, 2);
console.log(poligono.area());
console.log(poligono.perimeter());

console.dir(cuadrado);