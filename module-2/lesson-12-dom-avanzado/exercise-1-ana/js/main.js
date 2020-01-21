'use strict';
//array
const numbers = [1, 2, 3];
//ul
const items = document.querySelector('.js-items');

for (const number of numbers) {
    //creamos li
    const newItem = document.createElement('li');
    //creamos nodo de los valores del array numbers
    const numberElement = document.createTextNode(number);
    //metemos el nodo number en un li y lo vamos iterando
    newItem.appendChild(numberElement);
    //metemos durante la iteración cada li en el ul
    items.appendChild(newItem);
}