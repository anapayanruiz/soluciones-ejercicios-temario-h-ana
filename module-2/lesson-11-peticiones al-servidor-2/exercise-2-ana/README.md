# EJERCICIO 2
Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.
Seguimos aprendiendo un poco de HTTP. Para poder hacer una petición compleja con fetch tenemos que pasar un segundo parámetro para establecer opciones, donde podemos indicar
el método, por ejemplo, method: 'POST' (por defecto es GET)
datos a enviar, que son los datos que enviamos al servidor, por ejemplo, body: '{adalaber: 1}'
cabeceras HTTP, que son metadatos (datos sobre los datos a enviar), como por ejemplo el tipo de los datos que enviamos que puede ser en JSON o en texto plano
Puedes leer más detalles en el tutorial de uso de fetch en MDN.