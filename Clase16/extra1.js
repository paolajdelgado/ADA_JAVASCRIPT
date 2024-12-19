//Encuentra los nombres mas cortos y trasnforma su formato

//Lista inicial
let nombres = ["Lucia", "Ana", "Maria", "Luis", "Jose", "Pablo"];

//Tareas
//a) Filtra los nombres que tengan menos de 5 letras

const nombresMenor5Letras = nombres.filter(function(nombre){
    return nombre.length < 5;
});

let nombresCortos = nombresMenor5Letras;
console.log(nombresCortos);

//b)Cambia palabras a MAYUSCULAS
let nombresString = nombresCortos.join(", ");
console.log(nombresString);

let nombresMayusculas = nombresString.toUpperCase()
console.log(nombresMayusculas);


//c) Construye una frase que diga: "Los nombres seleccionados son: [Nombres]"
console.log("Los nombres seleccionados son: " + nombresMayusculas);