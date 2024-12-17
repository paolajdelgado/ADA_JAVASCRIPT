//Agregar y eliminar a la fila de mascotas

//Fila mascotas inicial
let fila_mascotas = ["Perro", "Gato", "Conejo"];

//Agregar hamster al inicio de la fila
fila_mascotas.unshift("Hamster");

//Atiende a la primer mascota de la fila
console.log(`Adelante ${fila_mascotas[0]}, es tu turno.`);

//Muestra fila final
console.log(fila_mascotas);