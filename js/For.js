/*
a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).

*/

/*a*/
arreglo_colores= ['rojo','azul','amarillo','verde','magenta'];
for ( i = 0; i< arreglo_colores.length; i++) {
    alert(arreglo_colores[i]);
    
}

/*b*/
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("rojo azul amarillo verde magenta"));

/*c*/

var sentence ="";
arreglo_colores2= ['rojo','azul','amarillo','verde','magenta'];

for (i = 0; i< arreglo_colores2.length; i++) {
 sentence += arreglo_colores2[i] + '';
  
}

sentence = sentence.substring(0,sentence.length - 1);

alert(sentence);

/*d*/
let aVacio = [];

for (let i= 0; i <= 9; i++) {
aVacio.push(i);
  
}

console.log(aVacio);