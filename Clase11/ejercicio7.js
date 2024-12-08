const prompt = require("prompt-sync")({ sigint: true }); 

//Calculadora simple
//Pide al usuario dos numeros y una operacion matematica
let numero1 = prompt("Ingresa un numero: ");
let numero2 = prompt("Ingresa un numero: ");
let operacion = prompt("Dime una operacion matematica (suma, resta, multiplicacion, division): ");

//Calcular la operacion y mostrar el resultado. Operacion invalida = error
switch (operacion){
    case "suma":
        let resultado_suma = parseFloat(numero1) + parseFloat(numero2);
        console.log(resultado_suma);
        break;
    case "resta":
        let resultado_resta = parseFloat(numero1) - parseFloat(numero2);
        console.log(resultado_resta);
        break;
    case "multiplicacion":
        let resultado_multiplicacion = parseFloat(numero1) * parseFloat(numero2);
        console.log(resultado_multiplicacion);
        break;
    case "division":
        let resultado_resultado_division = parseFloat(numero1) / parseFloat(numero2);
        console.log(resultado_resultado_division);
        break;
    default:
        console.log("Operacion invalida")
}