# EJERCICIO 2
Control de acceso
En este ejercicio vamos a crear un control de acceso. Para ello prepararemos una variable y le asignaremos un nombre. Posteriormente, si el nombre es el tuyo o el de tu compañera mostraremos el mensaje "Bienvenida, (tu nombre aquí)". Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".
Nota: cambia el valor de la variable y comprueba que todo funciona como esperas.
Podemos complicar incluso más la estructura del condicional cuando queremos que se ejecute un código si NO se cumple la primera condición pero SOLO si se cumple una segunda condición. En este caso, a la estructura del condicional simple le añadimos:
usamos la palabra else para definir qué hacer cuando NO se cumple la condición
usamos la palabra if para definir una nueva comprobación
después indicamos entre paréntesis ( ) una segunda condición
a continuación definimos un segundo bloque de código entre llaves { } que se va a ejecutar si se cumple esta segunda condición
Podemos pensar en ello como un "Si...haz...sino si...haz...".
const age = 35;

if (age > 30) {
  console.log('Tienes más de 30 años'); // Esta línea se ejecuta solo si se cumple la condición
} else if (age >= 20) {
  console.log('Tienes entre 20 y 30 años'); // Esta línea se ejecuta solo si se NO cumple la primera condición y SÍ se cumple la segunda
}
Si necesitamos una estructura más complicada, siempre podemos poner un else al final para ejecutar código cuando no se ha cumplido ninguna de las condiciones. Además, podemos incluir todas las condiciones que queramos con else if.
const age = 35;

if (age > 30) {
  console.log('Tienes más de 30 años'); //Esta línea se ejecuta solo si se cumple la condición
} else if (age >= 20) {
  console.log('Tienes entre 20 y 30 años'); //Esta línea se ejecuta solo si se NO cumple la primera condición y SÍ se cumple la segunda
} else if (age >= 10) {
  console.log('Tienes entre 10 y 19 años'); //Esta línea se ejecuta solo si se NO cumplen la primeras condiciones y SÍ se cumple la última
} else {
  console.log('Eres un niño entre 0 y 9 años'); //Esta línea se ejecuta solo si se NO cumplen ninguna de las condiciones anteriores
}
Nota: Los bloques de un condicional son excluyentes, es decir, solo se va a ejecutar el código de un bloque (if, else if o else). En ningún momento se ejecutará el código de dos bloques ya que si se cumple una condición se ejecuta el código de su bloque y se ignoran las posteriores condiciones.