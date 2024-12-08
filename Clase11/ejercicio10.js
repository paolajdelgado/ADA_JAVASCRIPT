const prompt = require("prompt-sync")({ sigint: true }); 

//Adivina el numero
//Programa seleccione un numero al azar entre 1 y 10
let numero = Math.floor(Math.random() * 11);
console.log(numero);

//Pide al usuario que adivine el numero hasta en 3 intentos.
//Si el usuario acierta en cuaqluiera de los intentos, felicitalo y deten los intentos restantes.
//Si no adivina despues de los 3 intentos, muestra el numero secreto

//Se puede sacar el intento del ciclo for
//let intento = 0

for(let intento = 1; intento <= 3; intento++){
    let peticion = prompt(`Adivina el numero entre el 1 y 10. Es tu intento numero ${intento}/3. `);

    if (parseFloat(peticion) === parseFloat(numero)) {
        console.log("Felicidades, adivinaste!");
        break;
    } else {
        console.log(prompt('Incorrecto'));
    }   

    if(intento === 3){
        console.log(`Fallaste. Se acabaron los intentos. El numero era ${numero}`);
    } 
}

