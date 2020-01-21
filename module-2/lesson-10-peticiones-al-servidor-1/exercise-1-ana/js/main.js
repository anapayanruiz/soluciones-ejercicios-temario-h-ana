'use strict';

/* tiene que haber algo en el body <h1> con texto porque al listener le estamos diciendo que se aplique en el body y tiene que haber un elemento
al que se le pueda hacer click */

function getEmoji() {
    fetch("https://api.rand.fun/text/password?length=20")
        .then(response => response.json())
        .then(data => {
            document.body.innerHTML = data.result
        });
}
document.body.addEventListener("click", getEmoji);