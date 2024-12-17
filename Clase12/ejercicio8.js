
//Ejericio: Rojo y verde
//Generar 2 funciones. Ambas deben devolver un resultado unico-- Rojo: 505. Verde: 505

//Generar matriz

let matriz = [];
let vuelta = 1;


for (let i = 0; i < 10; i++) {
    let fila = [];
    for (let j = 0; j < 10; j++) {
        fila.push(vuelta);
        vuelta++;
    }

    matriz.push(fila);
}

//console.log(matriz);



//Funcion A)
//Sumar los valores en la diagonal marcada en rojo
function suma_r(matriz){
    let suma = 0;

    for(let f = 0; f < matriz.length; f++){
        suma = suma + matriz[f][f];
    }
    
    return suma;

}

console.log(suma_r(matriz));



//Funcion B)
//Marcar los valores de la diagonal marcada en verde
function suma_v(matriz){
    let suma = 0;
    let c = matriz.length - 1; 

    for(let f = 0; f < matriz.length; f++){
        suma = suma + matriz[f][c-f];
    }
    
    return suma;

}

console.log(suma_v(matriz));


