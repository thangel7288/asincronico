/**
 * Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
 * try/catch para mostrar un mensaje de error en caso de fallo.
 */

const leer = async () => {
    try {
        const respuesta = await fetch("./data.json");
        const data = await respuesta.json();
        return data; 
    } catch (error) {
        console.error("Error al leer el archivo:", error);
    }
};

async function procesarDatos() {
    try {
        const data = await leer();

        data.biblioteca.forEach(libro => {
            console.log("Título:", libro.titulo);
            console.log("Descripción:", libro.descripcion);
            console.log("ID:", libro.id);
        });
    } catch (error) {
        console.error("Error al procesar los datos:", error);
    }
}

procesarDatos();