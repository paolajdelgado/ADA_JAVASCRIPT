const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio: Verificar origen del auto

let verificar = marca =>{
    if(marca === "Chevrolet" || marca === "Ford" || marca === "Fiat"){
        clasificacion = "Es un auto nacional";
    } else {
        clasificacion = "Es un auto importado";
    }

    return clasificacion;
}

let marca_auto = prompt("Ingrese marca de su auto: ");
console.log(verificar(marca_auto))
