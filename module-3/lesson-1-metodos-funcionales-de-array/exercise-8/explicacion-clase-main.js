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

const isWinner = (acc, user) => {

    if (acc === null || user.time < acc.time) {
        acc = user;
    }
    console.log(user);
    return acc;
};

const winner = runners.reduce(isWinner, null);

console.log('This winner is...', winner);