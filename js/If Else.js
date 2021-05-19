/*
a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”
b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
i) “Bebe” si la edad es menor a 2 años
ii) “Nino” si la edad es entre 2 y 12 años
iii) “Adolecente” si la edad es entre 13 y 19 años
iv) “Joven” si la edad está entre 20 y 30 años
v) “Adulto” entre 31 y 60 años
vi) “Adulto mayor” entre 61 y 75 años
vii) “Anciano” si es mayor a 75 años

*/

/*a*/
function generate(){
    let num = Math.random();
    
    if (num >= 0,5) {
    alert('Greater than 0,5')
    } else if(num<= 0,5){
    alert('Lower than 0,5')
    }
    console.log(num);
}
generate()

/*b*/

var edad = parseInt(prompt("Ingrese un numero para confirmar grupo al que pertenece según edad.\n"+
                        " 1- Bebe\n" + 
                        " 2- Niño\n" +
                        " 3-Adolescente\n" +
                        " 4-Joven\n" +
                        " 5-Adulto\n" +
                        " 6-Adulto mayor\n" +
                        " 7-Anciano\n"));

switch (edad) {
    
    case 1:
    var age=(prompt("Ingrese edad"));

    if(age<2){
alert("Bebe.Tiene menos de 2 años");
}
        
    break;

    case 2:
    var age2=(prompt("Ingrese edad"));
    if (age2>=2 && age2<=12) {
    alert("Niño.Tiene entre 2 y 12 años");
    }

    break;

    case 3:
    var age3=(prompt("Ingrese edad"));
    if (age3>=3 && age3<=19) {
    alert("Adolescente.Entre 13 y 19 años");
    }
    break;

    case 4:
        var age4=(prompt("Ingrese edad"));
        if (age4>=20 && age4<=30) {
        alert("Joven.Entre 20 y 30 años");
        }
        break;

        case 5:
            var age5=(prompt("Ingrese edad"));
            if (age5>=30 && age5<=60) {
            alert("Adulto.Entre 30 y 60 años");
            }
            break;
        
        case 6:
        var age6=(prompt("Ingrese edad"));
        if (age6>=61 && age6<=75) {
        alert("Adulto mayor.Entre 61 y 75 años");
         }
        break;
      
        case 7:
        var age7=(prompt("Ingrese edad"));
        if (age7>75) {
        alert("Anciano.Mayor de 75 años");
         }
        break;

    default:
        alert("opcion invalida");
        break;
}


