const prompt = require("prompt-sync")({ sigint: true });

//Ejercicio 2: Pasear a mi mascota

//  a) Clima
//lluvia, soleado

let clima = prompt("¿Esta lloviendo? ");
let accion = "";

if (clima === "Si") {
    accion = "Quedate en casa";
} else {
    accion = "Perfecto, esta soleado. Puedes salir de casa.";
}

console.log(accion);

//  b) estado de salud

let salud = prompt("¿Te sientes bien?");
let recomendacion = "";

if (salud == "si") {
    recomendacion = "Puedes salir a pasear a tu perro.";
} else if (salud == "mas o menos") {
    recomendacion = "Espera a ver si mas tarde te sientes mejor para salir.";
} else  {
    recomendacion = "No salgas.";
}
    

console.log(recomendacion);


//  c) pendientes por hacer
let pendientes = 10;
let terminados = prompt("¿Cuantos pendientes haz terminado?");
let posibilidad ="";

if (terminados <= pendientes*0.8 && terminados > pendientes*0.6) {
    posibilidad = "Avanza un poco mas en tus pendientes y despues sales a relajarte con tu perro.";
} else if (terminados <= pendientes*0.6 && terminados > pendientes*0.3) {
    posibilidad = "Haz avanzado mucho, puedes salir a pasear a tu perro por 1 hora. Después regresas a terminar.";
} else if (terminados <= pendientes*0.3 && terminados >= pendientes*0.1) {
    posibilidad = "Sal a pasear a tu perro sin preocupaciones.";
} else {posibilidad = "No salgas, tienes mucho trabajo por hacer.";
}
    
console.log(posibilidad);