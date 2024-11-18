/**
 * Realiza una llamada a un archivo local en formato json, utiliza el método then()
 * para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterior
 * (Por ejemplo, mostrar solo los nombres que comiencen con "A").
 */


function leer() {
    return fetch("data.json")
}

leer().then((respuesta) => respuesta.json()).then((data) => {
    
       
        const biblioteca = data.biblioteca;

        const filtrado = biblioteca.filter((item) => item.descripcion.startsWith("U"));
        console.log(filtrado);
    })