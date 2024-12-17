const prompt = require("prompt-sync")({ sigint: true }); 

//Calcular precio final con IVA
let precio_producto = prompt("¿Cuál es el precio del producto? ");
let porcentaje_iva = prompt("¿Cuál es el porcentaje de IVA? ");


let precio_final = (precio_producto, porcentaje_iva) => parseFloat(precio_producto) + ((parseFloat(precio_producto) * parseFloat(porcentaje_iva))/100);

console.log(precio_final(precio_producto, porcentaje_iva));
