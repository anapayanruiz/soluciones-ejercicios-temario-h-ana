import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './components/ItemList';
import './stylesheets/index.css';




const arrayOfItems = [
    {
        name: 'Cereales con chocolate',
        // description: 'Cereales rellenos de chocolate',
        quantity: 2,
        category: 'Cereales',
        price: 5
    },
    {
        name: 'Hamburguesa con queso',
        description: 'Hamburguesa rica y saludable',
        quantity: 1,
        category: 'Fast-food',
        price: 15
    },
    {
        name: 'Agua mineral',
        description: 'Agua de un charco del Himalaya',
        quantity: 2,
        category: 'Bebida',
        price: 5
    }
];


ReactDOM.render(
    <ItemList items={arrayOfItems} />,
    document.getElementById('react-root')
);

