const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio: Tipo de Datos:
let verdadero = true;
let texto = "hola chicas";
let numero = 30.6;
let nada = "";

//Operaicion matematica
let suma = numero + 20;
console.log(suma);

//Concatenacion string
console.log(`${texto}, como estan?`);

//Verificacion variable verdadero
if (verdadero = true){
    console.log("La variable es verdadera");
} else {
    console.log("La variables es falsa");
}

//verificacion variable nada
if(nada === ""){
    console.log("La variable esta vacia");
} else {
    console.log("La variable contiene informacion");
} 

