const prompt = require("prompt-sync")({ sigint: true });

//Ejercicio. Ultima aparicion de un modelo de auto

//INFORMACION:
//Desarrollo de una aplicación para el control de gastos.
//Usuario ingresa información de gastos diaria

//OBJETIVO:
//Registrar el total de gastos al finalizar la jornada

//ORGANIZACION INFO:
//Todos los meses tienen 4 semanas
//Matriz 4X7: filas a semana y columnas a dias

let matriz = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

//console.log(matriz);

//SOLICITUDES:

let suma_mes = 0;
let gastos_semana = [];
let mayor_gasto2 = 0;
let semana_mayor_gasto= 0;

for(let f=0; f < matriz.length; f++){
    let suma = 0;
    let mayor_gasto = 0; 
    let dia_mayor_gasto = 0;
    

    for(let c=0; c < matriz[f].length; c++){
        //a) para calcular el gasto de cada semanal
        suma = suma + matriz[f][c];

        //c) para calcular el dia con el mayor gasto de cada semana
        if(matriz[f][c] > mayor_gasto){
            mayor_gasto = matriz[f][c];
            dia_mayor_gasto = c;
        };
            
    };

    
    //c) Para conocer el gasto total semanal
    console.log(`El gasto de la semana ${f+1} fue de ${suma}`);

    //d) Para conocer el dia con el mayor gasto de la semana
    console.log(`El mayor gasto de la semana ${f+1} fue de ${mayor_gasto} en el dia ${dia_mayor_gasto+1}`);


    gastos_semana[f]= suma;
    if(gastos_semana[f] > mayor_gasto2){
        mayor_gasto2 = gastos_semana[f];
        semana_mayor_gasto = f;

    };



    suma_mes = suma_mes + suma;
}

//c) Para conocer el gasto del mes
console.log(`La gasto del mes fue ${suma_mes}`);


//d)Semana con mayor gastos
console.log(`La semana ${semana_mayor_gasto +1} fue la que reportó un gasto mayor en el mes, de ${mayor_gasto2} pesos`);



//b) Total de un dia en particular.
let semana = prompt("¿De qué semana quieres conocer los gastos? (1 a 4) ");
let dia = prompt("¿De qué día de esa semana quieres conocer los gastos? (1 a 7) ");

console.log(`El gasto del día ${dia} de la semana ${semana} fue de ${matriz[parseFloat(semana)-1][parseFloat(dia)-1]}`);

