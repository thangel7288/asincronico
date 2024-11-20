
const biblioteca = [{
    titulo: `La divina comedia`,


    autor: `Dante Alighieri`
},{
    titulo: `La llamada de Cthulu`,


    autor: `H.P LoveCraft`
}, {
    titulo: `La metamorfosis`,

    autor: `Franz Kafka`
}, {
    titulo: `Rebelión en la granja`,

    autor: `George Orwell`
}, {   
    titulo: `1984`,
    
    autor: `George Orwell`
}];


console.log("Estos son los libros disponibles en nuestra base de datos.");



async function asyncPromise() {




    return new Promise ((resolve) => {





        setTimeout (() => {

            const librosInfo = biblioteca.map(libro => (`Titulo: ${libro.titulo}\n  Autor: ${libro.autor}\n\n`));
            resolve(`${librosInfo} ¡Operación completada!`)
        }, 1000)
    });

}





async function dataLibros() {
    const libros = await asyncPromise();
    console.log(libros);
    
}

dataLibros();