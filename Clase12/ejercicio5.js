const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio: Array y condicionales
//Crea un prgrama que solicite al usuario ingresar 5 nombres y los almacene en un array
let nombres = [];

for(let i= 1; i<=5; i++){
    let solicitud_nombres = prompt("Ingresa un nombre: ");
    nombres[i] = solicitud_nombres;
}


//Verifica si el nombre se encuentra en el array
let verificar_nombre = prompt("Ingresa un nombre. Verificaremos si se encuentra en nuestra base de datos: ");

if(verificar_nombre = nombres){
    console.log(`El nombre se encuentra en la base de datos.`);
} else{
    console.log(`El nombre no se encuentra en la base de datos. Intente de nuevo.`);
}

