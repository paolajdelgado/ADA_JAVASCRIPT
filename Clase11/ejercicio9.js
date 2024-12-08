const prompt = require("prompt-sync")({ sigint: true }); 

//cuenta regresiva para el despegue
//Contar de 10 hasta 0 e imprimir Despegue al final. CICLO FOR

console.log("Cuenta regresiva para el despegue: ")

for(let cuenta = 10; cuenta >= 1; cuenta --){
    console.log("" + cuenta);
}

for(cuenta = 0; cuenta >= 0; cuenta --){
    console.log(cuenta + ": ¡Despueguen!");
}