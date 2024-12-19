//Ejercicio: Encuentra el primer numero mayor a 10

//Lista inicial
let numerosInicial = [5, 8, 12, 20, 3];

//Encuentra el primer numero mayor a 10
const buscaMayorDiez = numerosInicial.find(function(num){
    return num > 10;
});

console.log(buscaMayorDiez);