const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio: Solicita al usuario que ingrese su contraseña hasta que sea la correcta (1234)
let password = "";

do{
    password = prompt("Introduzca la contraseña: ");
    console.log("Contraseña incorrecta. Intente de nuevo.");
} while (parseFloat(password) != 1234);

console.log("Bienvenida!");