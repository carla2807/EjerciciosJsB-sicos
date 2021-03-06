/*
a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/

/*a*/
const val1 = prompt('valor 1:');
const val2 = prompt('valor 2:');

function sumarNumeros(a, b){
console.log(parseInt(a) + parseInt(b));
}


sumarNumeros(val1,val2);



/*b*/
const valor1 = prompt('ingresa valor 1:');
const valor2 = prompt('ingresa valor 2:');

function sumarSoloNumeros(c, d){
if (c=="" || d=="" ) {
   alert('Al menos uno de los dos valores ingresados no es numérico.');
}
else{
    console.log(parseInt(c) + parseInt(d));
}

}

sumarSoloNumeros(valor1,valor2);

/*c*/
function Validate(x,y){
    if (Number.isInteger(y/x)) {
        return 'True';
    }
    
}
console.log(Validate(5,10));

/*d-e*/

function capturarEntero(){
    do {
    var numero = prompt('Digite un numero','0');
    

    if (!Number.isNaN(Number(numero))) {
        return parseInt(numero);
    }
    } while(true)
}
window.onload = function(){
    let numero1 = capturarEntero();
    let numero2 = capturarEntero();
    
    let suma = numero1 + numero2;
    document.getElementById('resultado').innerText = suma;
}


