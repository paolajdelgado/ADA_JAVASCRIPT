const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio 10:
//Pide al usuario que ingrese un numero del 1 al 7
let numero = prompt("Ingresa un numero del 1 al 7: ");
let dia_semana = "";

//Muestra el dia de la semana correspondiente. Si ese numero no esta dentro del rango, marca error.
if (parseFloat(numero) === 1){
    dia_semana = "El numero 1 corresponde al dia Lunes";
} else if (parseFloat(numero) === 2){
    dia_semana = "El numero 2 corresponde al dia Martes";
} else if (parseFloat(numero) === 3){
    dia_semana = "El numero 3 corresponde al dia Miercoles";
} else if (parseFloat(numero) === 4){
    dia_semana = "El numero 4 corresponde al dia Jueves";
} else if (parseFloat(numero) === 5){
    dia_semana = "El numero 5 corresponde al dia Viernes";
} else if (parseFloat(numero) === 6){
    dia_semana = "El numero 6 corresponde al dia Sabado";
} else if (parseFloat(numero) === 7){
    dia_semana = "El numero 7 corresponde al dia Domingo";
} else {
    dia_semana = "Numero invalido";
}

console.log(dia_semana);