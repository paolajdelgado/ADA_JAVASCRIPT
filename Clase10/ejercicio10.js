const prompt = require("prompt-sync")({ sigint: true });

//Calculo descuento
let precio_original = prompt("Ingrese el precio original del producto: ");
let descuento = prompt("Ingrese el porcentaje de descuento: ");

let monto_descuento = parseFloat(precio_original) * (parseFloat(descuento) / 100);
let precio_final = parseFloat(precio_original) - monto_descuento;
console.log(precio_final);