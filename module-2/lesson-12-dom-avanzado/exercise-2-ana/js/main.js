'use strict';

//elemento contenedor
const content = document.querySelector('.js-container');
//elemento select
const select = document.querySelector('.js-select');

//elementos creados
const img = document.createElement('img');
//meter img en value pero no funciona hasta que se activa el select
img.getAttribute('value');
content.appendChild(img);


function handleSelect(event) {
    console.log(event.target.value);
    img.setAttribute('src', event.target.value);

};

select.addEventListener('click', handleSelect);