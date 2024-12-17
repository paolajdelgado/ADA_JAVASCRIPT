
//Ejercicio: El deportista
let deportista ={
    nombre: "Paola",
    energia: 50,
    experiencia: 10,
};

function entrenarHoras(cantidadHoras){
    energia2 = deportista.energia - (cantidadHoras*5);
    experiencia2 = deportista.experiencia + (cantidadHoras*2);
    
    return `La deportista ${deportista.nombre} ha disminuido ${energia2} de energia pero ganó ${experiencia2} de experiencia debido a entrenar ${cantidadHoras} horas`;
};

console.log(entrenarHoras(2));