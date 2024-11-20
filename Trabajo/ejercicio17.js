/**
 * Realiza una llamada a un archivo local en formato JSON, luego muestre los datos obtenidos en la consola.
 */


function leer() {
    return fetch("data.json")
}

leer().then((respuesta) => {
    respuesta.json().then((data) => {
       
console.log("BIBLIOTECA");
console.log("");
for (let i = 0; i < data.biblioteca.length; i++) {
    console.log("");
    console.log(`Título: ${data.biblioteca[i].titulo}`);
    console.log(`Descripción: ${data.biblioteca[i].descripcion}`);
    console.log(`ID: ${data.biblioteca[i].id}`);
        }
    }) 
});