const prompt = require("prompt-sync")({ sigint: true }); 

//Calcular promedio calificaciones
let cantidad = 5;
let suma = 0; 

for (let i=0; i < cantidad; i++){
    let calificaciones = prompt("Ingresa la calificacion: ");
    suma = suma + parseFloat(calificaciones);
}


let promedio = (suma, cantidad) => suma / cantidad;

//Esto no sale
console.log(`El promedio es ${promedio}`);


