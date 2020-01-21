'use strict';

const runners = [{
        name: 'Gregory Goyle',
        time: 56,
        student: true
    },
    {
        name: 'Nymphadora Tonks',
        time: 9,
        student: false
    },
    {
        name: 'Luna Lovegood',
        time: 45,
        student: true
    },
    {
        name: 'Cedric Diggory',
        time: 28,
        student: true
    },
    {
        name: 'Cho Chang',
        time: 35,
        student: true
    },
];

const studentRunners = runners.filter(runner => runner.student);


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

const result = studentRunners.reduce(myReducer);

console.log(result);