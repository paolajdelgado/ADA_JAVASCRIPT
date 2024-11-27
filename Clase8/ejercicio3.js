const prompt = require("prompt-sync")({ sigint: true });

//Ejercicio 3: Calculadora simple
// a) Pide al usuario dos numeros y una operacion
let numero1 = prompt("Dime un numero: ");
let numero2 = prompt("Dime otro numero: ");
let operacion = prompt("Dime una operacion (suma, resta, multiplicacion o division): ");
let resultado = "";

//  b) Realiza la operacion
if (operacion == "suma"){
    resultado = parseFloat(numero1) + parseFloat(numero2);
} else if (operacion == "resta"){
    resultado = parseFloat(numero1) - parseFloat(numero2);
} else if (operacion == "multiplicacion") {
    resultado = parseFloat(numero1) * parseFloat(numero2);
} else if (operacion == "division") {
    resultado = parseFloat(numero1) / parseFloat(numero2);
} else {
    resultado = "Solo puedes elegir una operacion de las que te ofreci. Repite el proceso."; //no supe como terminar este "else"
}

console.log(parseFloat(resultado));