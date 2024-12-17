
//Ejercicio. Mensaje global y local

let saludoGlobal = "Hola desde el scope global.";

function mostrarMensaje(){
    let saludoLocal = "Hola desde el scope local.";
    return saludoGlobal + " " + saludoLocal;
}

console.log(mostrarMensaje());