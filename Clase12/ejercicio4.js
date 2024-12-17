const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio: Ciclo For - Array
//Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla

//Paso 1 y 2: Crear array para almacenar las notas
let notas = [];

//Paso 3: Pide al usuario que ingrese las notas de varios estudiantes. Una por una.
//Paso 4: Usar un bucle FOR para solicitarlas notas y asignarlas directamente a posiciones especificas del array notas
for(let i= 0; i <= 5; i++){
    let ingreso_notas = prompt("Ingresa la nota del estudiante: ");
    notas[i] = ingreso_notas;
}

//Paso5. Imprime la consola con las notas ingresadas usando el array notas
console.log(`Las notas de los alumnos fueron: ${notas}`);