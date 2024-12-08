const prompt = require("prompt-sync")({ sigint: true }); 

//Semaforo inteligente
//Pide al usuario que escriba un color del semafoto: ROJO - AMARILLO - VERDE
let color = prompt("Ingrese un color del semaforo: ");

//Imprimir un mensaje con respecto al color
switch(color){
    case "rojo":
        console.log("Alto, no puedes avanzar");
        break;
    case "amarillo":
        console.log("Precaucion, preparate para detenerte");
        break;
    case "verde":
        console.log("Avanza con seguridad");
        break;
    default:
        console.log("Color no recornocido, ingresa rojo, amarillo o verde");
}