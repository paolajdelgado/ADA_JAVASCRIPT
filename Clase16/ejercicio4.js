//Ejercicio Calcula la suma total de los numeros

//Lista inicial
let numero = [1, 2, 3, 4];

//Calcular el resultado de sumarlos todos juntos
const sumarNumeros = numero.reduce(function(acum, num){
    return acum + num;
});

//Imprime el total en la consola
console.log(sumarNumeros);