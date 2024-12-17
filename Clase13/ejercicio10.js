
//Ejercicio: Factorial de un numero (EJERCICIO ENTREVISTA)
let calcularFactorial = function(n){
    let factorial = 1;

    for (let i = 1; i <= n; i++){
        factorial = factorial * i; 
    };

    return factorial;
}

console.log(calcularFactorial(5));