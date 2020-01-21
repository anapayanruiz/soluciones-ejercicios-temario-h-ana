'use strict';

const times = [56, 9, 45, 28, 35];

const myReducer = (acc, ele, index) => {
    console.log(`acc: ${acc}`);
    console.log(`ele: ${ele}`);
    console.log(`index: ${index}`);
    console.log('______');

    return acc + ele;
};

const result = Math.round(times.reduce(myReducer) / times.length);

console.log(result);