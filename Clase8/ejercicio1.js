const prompt = require("prompt-sync")({ sigint: true });

//Ejercicio 1: Viaje a la fiambreria
//Se quiere ir a comprar 150 gramos de queso a la fiambreria de Monica

//Se debe tener en cuenta las siguientes variables:
//  a) Temperatura = numero
let temperatura = prompt("¿A que temperatura nos encontramos? ");
let vestimenta = "";

if (parseFloat(temperatura) <= 16){
    vestimenta = "Abrigate bien.";
} else if (parseFloat(temperatura) > 16 && parseFloat(temperatura) <=25){
    vestimenta = "Clima agradable. Viste lo que gustes.";
} else {
    vestimenta = "Demasiado calor. Usa ropa adecuada.";
}

console.log(vestimenta);

//  b) ¿Esta lloviendo? = booleano
let lluvia = prompt("¿Esta lloviendo? ");
let vestimenta2 = "";

if (lluvia = "si"){
    vestimenta2 = "Usa ropa adecuada y no olvides tu paraguas.";
} else {
    vestimenta2 = "Sal sin preocupaciones.";
}

console.log(vestimenta2);

//  c) Piso ascensor = numero
let piso = prompt("¿En que piso te encuentras? ");
let elevador = "";

if (parseFloat(piso) >= 1){
    elevador = "Tendras que usar elevador.";
} else {
    elevador = "No es necesario usar elevador.";
}

console.log(elevador);

//  d) Hora actual, hora de apertura y cierre de la fiambreria = numero
let hora_actual = prompt("¿Que hora es? ");
let hora_apertura = 9;
let hora_cierre = 18;
let estado_tienda = "";

if (parseFloat(hora_actual) >= hora_apertura && parseFloat(hora_actual) >= hora_cierre){
    estado_tienda = "Se encuentra abierta la fiambreria.";
} else {
    estado_tienda = "Esta cerrada la fiambreria.";
}

console.log(estado_tienda);

//  e) Cntidad de queso = numero
let cantidad_queso = prompt("¿Cuanto gramos de queso requiere? ");
let precio_gramo = 0.13;
let costo = parseFloat(cantidad_queso) * precio_gramo;

console.log(`Serian ${costo} pesos.`);


//  f) Deuda con Monica
let deuda = prompt("¿Tiene alguna deuda con nosotros? ");
let venta = "";

if (deuda == "si"){
    venta = "No puedo venderle nada mas hasta que salde su deuda.";
} else {
    venta ="Excelente. Muchas gracias por su compra. Vuelva pronto.";
}

console.log(venta);