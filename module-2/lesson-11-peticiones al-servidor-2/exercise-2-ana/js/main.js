'use strict';

function getPerson(event) {
    event.preventDefault();
    const userValue = document.querySelector(".js-input").value;
    fetch(`https://swapi.co/api/people/?search=${userValue}`)
        .then(response => response.json())
        .then(data => {
            let listItems = "";
            //for (let i = 0; i < data.results.length; i++) {
            //  listItems += `<li>Su nombre es:${data.results[i].name} y el género:${data.results[i].gender}</li>`;
            for (const item of data.results) {
                listItems += `<li>Su nombre es:${item.name} y el género:${item.gender}</li>`;
            }
            const list = document.querySelector(".js-list");
            list.innerHTML = listItems;
        });

}

const buttonEl = document.querySelector(".js-button");
buttonEl.addEventListener("click", getPerson);