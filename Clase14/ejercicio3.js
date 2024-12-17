const prompt = require("prompt-sync")({ sigint: true }); 

//clasificacion por edades

let clasificacion = edad_usuario => {
    if (edad_usuario < 12){
        return "Es usted un niño";
    } else if (edad_usuario >= 12 && edad_usuario < 18){
        return "Es usted adolescente";
    } else if (edad_usuario >= 18 && edad_usuario < 60){
        return "Es usted un adulto";
    } else {
        return "Es usted un adulto mayor";
    }
}

let edad_usuario = prompt("Ingrese su edad: ");
let clasificacion_usuario = clasificacion(edad_usuario);

console.log(clasificacion_usuario);