
//Libros
let libro1 ={
    titulo: "Eclipse",
    autor: "Stephenie Meyer",
    anioPublicacion: 2007
};

let libro2 ={
    titulo: "Sol de Medianoche",
    autor: "Stephenie Meyer",
    anioPublicacion: 2020
};



function mostrarLibro(libros){
    for(let i=0; i< libros.length; i++){
        console.log(`El libro ${libros[i].titulo} fue escrito por ${libros[i].autor} en el año ${libros[i].anioPublicacion}`);
    }
}

let libros2 = [libro1, libro2];
mostrarLibro(libros2);
