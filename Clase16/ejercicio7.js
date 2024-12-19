//Ejercicio: Filtra nombres que empiecen con la letra "A"

//Lista inicial
let nombres = ["Ana", "Luis", "Andrea", "Maria"];


//Filtrar
const nombresConA = nombres.filter(function(nombre){
    return nombre[0] === "A";
});

console.log(nombresConA)


