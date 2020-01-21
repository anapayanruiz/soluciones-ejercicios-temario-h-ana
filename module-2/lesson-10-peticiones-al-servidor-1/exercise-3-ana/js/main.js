'use strict';

//obtener el perfil
function getName(username) {
    console.log('name: ', username);

    let url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            data.name
            data.public_repos
            data.avatar_url
            const htmlCode = `<h3>Resultados</h3><p><strong>Nombre</strong></p><p>${data.name}</p><p><strong>Foto</strong></p><img src="${data.avatar_url}"></img><p><strong>Número de repositorios</strong></p><p>${data.public_repos}</p>`;
            result.innerHTML = htmlCode;
        });


};

const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-button');
const name = document.querySelector('.js-name');
const result = document.querySelector('.js-result');

//obtener valor input
function getInputValue() {
    const inputValue = input.value;
    console.log(inputValue);
    return inputValue;
};

//handle
function handleButton() {
    getName(getInputValue());
};

//listener
btn.addEventListener('click', handleButton);