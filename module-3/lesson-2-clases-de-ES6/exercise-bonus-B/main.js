'use strict';

class Person {
    constructor(name) {
        this.name = name;
        this.firstName = 'Ana';
        this.lastName = 'Payan';
    }

    get fullName() {
        return `${this.firstName}, ${this.lastName}`;
    }
    nameFunction() {
        return this.fullName;
    }
}

const ana = new Person('Ana');
const bea = new Person('Beatriz', 'Sobrino');
console.log(ana.nameFunction());