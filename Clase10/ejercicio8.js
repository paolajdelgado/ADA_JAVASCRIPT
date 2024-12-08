const prompt = require("prompt-sync")({ sigint: true });

//Conversion de temperaruta °C a °F
//F = C * 9/5 + 32

let celsius = prompt("Ingrese una temperatura (°C): ");
let farenheit = parseFloat(celsius) * 9/5 +32;
console.log(farenheit);