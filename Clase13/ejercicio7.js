
//Ejercicio. Mensaje segun la hora
let horaActual = 5;

function mostrarSaludo(){
    if(horaActual < 12){
        return "Buenos días";
    } else if (horaActual >= 12 && horaActual < 18){
        return "Buenas tardes";
    } else {
        return "Buenas noches";
    };
}

console.log(mostrarSaludo());