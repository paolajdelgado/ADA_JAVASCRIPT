//Gestion inventario de una tienda

//inventario inicial
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];

//1) Agregar un nuevo producto: "Impresora"
inventario.push("Impresora")
console.log(inventario);

//2) Comprobar si tablet esta en el inventario
if(inventario.includes("Tablet")){
    console.log("Tablet se encuentra dentro del inventario");
} else {
    console.log("Tablet no se encuentra dentro del inventario");
}

//3) Eliminar el primer producto del inventario
inventario.pop();
console.log(inventario);

//4)Mostrar lista actualizada en una sola cadena de texto separada por comas
let separadosPorComa = inventario.join();
console.log(separadosPorComa);