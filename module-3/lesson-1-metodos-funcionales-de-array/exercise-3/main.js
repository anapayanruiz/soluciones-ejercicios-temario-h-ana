'use strict';

const users = [{
        name: 'María',
        isPremium: false
    },
    {
        name: 'Lucía',
        isPremium: true
    },
    {
        name: 'Susana',
        isPremium: true
    },
    {
        name: 'Rocío',
        isPremium: false
    },
    {
        name: 'Inmaculada',
        isPremium: false
    },
];

const helloNames2 = users.map(user => {
    let message = 'Bienvenida ' + user.name;
    if (user.isPremium === true) {
        message = 'Bienvenida ' + user.name + ' .Gracias por confiar en nosotros';
    }
    return message;
});

const helloNames3 = users.map(user => user.isPremium === true ?
    `Bienvenida ${user.name}` :
    `Bienvenida ${user.name} Gracias por confiar en nosotros`
);

const helloNames = users.map(user => {
    if (user.isPremium === true) {
        return 'Bienvenida ' + user.name + ' .Gracias por confiar en nosotros';
    } else {
        return 'Bienvenida ' + user.name;
    }
});
console.log(helloNames);