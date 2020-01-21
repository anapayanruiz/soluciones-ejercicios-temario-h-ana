'use strict';

function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector("img");
            img.src = data.message;
            img.alt = "Un perro";
        });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

/*Nota: Cuando recogemos un elemento de HTML podemos leer y modificar 
algunos de sus atributos directamente, como src y alt de la etiqueta img*/