'use strict';

const runners = [{
        name: 'Gregory Goyle',
        time: 56
    },
    {
        name: 'Nymphadora Tonks',
        time: 9
    },
    {
        name: 'Luna Lovegood',
        time: 45
    },
    {
        name: 'Cedric Diggory',
        time: 28
    },
    {
        name: 'Cho Chang',
        time: 35
    },
];

const myReducer = (acc, ele, index) => {
    console.log(`acc: ${acc.time}`);
    console.log(`ele: ${ele.time}`);
    console.log(`index: ${index}`);
    console.log('______');

    if (acc.time < ele.time) {
        return acc;
    } else {
        return ele;
    }
};

const result = runners.reduce(myReducer);

console.log(result);