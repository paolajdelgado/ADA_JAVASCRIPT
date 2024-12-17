const prompt = require("prompt-sync")({ sigint: true }); 

//Flores favoritas

//a)array vacio
let flores_fav = [];

//b)pregunta por las flores favoritas del usuario
for (let i=0; i<3; i++){
    let pregunta_flores = prompt("¿Cual es tu flor favorita? ");
    flores_fav[i] = pregunta_flores;
}



//c)pregunta por una nueva flor y verifica si es de sus favoritas 
let nueva_flor = prompt("Dime el nombre de una flor: ");

if(flores_fav.includes(nueva_flor)){
    console.log("Es una de tus flores favoritas");
} else{
    console.log("No es una de tus flores favoritas");
}


//d) muestra cuantas flores favoritas se mencionaron (manualmente) -- NO ENTIENDO
