/*
a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

*/

/*a*/
var Resort='TheReefPlayacard';
console.log(Resort.toUpperCase());

/*b*/

var dato='Hola comunidad Devcode';
console.log(dato.substring(-1,6));

/*c*/

var dato2='Hola comunidad Devcode';
console.log(dato.substring(19));

/*d*/

let string='hola comunidad devcode';
let cap= string.charAt(0).toUpperCase() + string.slice(1);
console.log(cap);

/*e*/
const dias=['lunes','martes','','Jueves','Viernes','Sabado','Domingo','Lunes','Martes','Miercoles','Jueves'];
const result=dias.indexOf('');
console.log(result);

/*f*/

let fruits = ["Apples", "Oranges"];

fruits.sort((a,b) =>{
    return b.toLowerCase().localeCompare(b.toLowerCase());
});

console.log(fruits);





















