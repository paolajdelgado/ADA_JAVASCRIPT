//Ejercicio: Busca un nombre específico

//Lista inicial
let nombres = ["Carlos", "Daniel", "Laura", "Ana"];

//Busca el nombre de "Laura" en la lista. Si esta, devuelvelo.
const buscarNombre = nombres.find(function(nombre){
    return nombre === "Laura";
});

console.log(buscarNombre);