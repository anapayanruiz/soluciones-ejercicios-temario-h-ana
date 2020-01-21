'use strict';

function getDogImage(dog) {
    // console.log('dog: ', dog);
    let url = 'https://dog.ceo/api/breeds/image/random';


    if (typeof dog === 'string') {
        url = `https://dog.ceo/api/breed/${dog}/images/random`;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const img1 = document.querySelector(".js-dog-image");
            img1.src = data.message;
            img1.alt = "Un perro";
        });
}
const btn = document.querySelector(".js-dog1");
btn.addEventListener("click", getDogImage);


/*Nota: Cuando recogemos un elemento de HTML podemos leer y modificar 
algunos de sus atributos directamente, como src y alt de la etiqueta img*/


// function getDogImage2() {
//     fetch("https://dog.ceo/api/breed/chihuahua/images/random")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             const img2 = document.querySelector(".js-dog-image");
//             img2.src = data.message;
//             img2.alt = "Otro perro";
//         });

// };


/* metemos una funcion dentro del listener le pasamos una funcion anónima
al que le pasamos un argumento*/
const btn2 = document.querySelector(".js-dog2");
btn2.addEventListener("click", function () {
    getDogImage('chihuahua');
});