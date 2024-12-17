const prompt = require("prompt-sync")({ sigint: true });

//EJERICIO 1: RENOVAR CREDENCIAL BIBLIOTECA
//  a) Quiero saber si podre irme en mi carro o tendre que usar camion
let carro = prompt("¿Esta el carro en casa? ");
let accion = "";

if (carro === "Si") {
    accion = "usar carro";
} else {
    accion = "Usar camion";
}

console.log(accion);

// b) Estara abierta la biblioteca
let hora_apertura = 9;
let hora_cierre= 16;
let hora_actual =prompt("¿Qué hora es? ");
let estado="";

if (hora_actual >= hora_apertura && hora_actual <= hora_cierre) {
    estado = "Biblioteca abierta";
} else {
    estado = "Biblioteca cerrada";
}

console.log(estado);

// c) Solicitud de datos para credencial
let nombre =prompt("Ingrese su nombre: ");
let apellido =prompt("Ingrese su apellido: ");
let domicilio =prompt("Ingrese su domicilio: ");

console.log(`Hola ${nombre} ${apellido}. Tu registro fue completado con éxito.`)

