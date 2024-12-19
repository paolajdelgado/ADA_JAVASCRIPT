//Ejercicio: Agrega un prefijo y un sufijo a cada palabra

//Lista inicial
let palabras = ["hola", "mundo", "javascript"];

//Transformarlas para que cada palabra tenga un prefijo "¡" y un sufijo "!".
const pref_suf = palabras.map(function(palabra){
    return "¡" + palabra + "!";
});

console.log(pref_suf);