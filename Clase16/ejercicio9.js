//Ejercicio. Cuenta la cantidad total de letras en una lista de palabras

//Lista inicial
let palabras = ["sol", "luna", "estrella"];

//Cuantas letras hay en total entre todas las palabras
let suma = 0;

for (let i=0; i<palabras.length; i++){
    console.log(palabras[i].length)
    suma = suma + palabras[i].length;
};

console.log(suma);
