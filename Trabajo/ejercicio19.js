/**
 *  Crea una función asincrónica que realice una llamada a un archivo local en formato json y
 *  luego manipule los datos recibidos para mostrar información específica
 */

async function funcionAsincronica() {
    try {
        const respuesta = await fetch("./data.json");
        const data = await respuesta.json();
        
        
        const titulos = data.biblioteca.map(libro => libro.titulo);

        let i = 0;

            
            const intervalo = setInterval(() => {
             
            console.log(titulos[i]);
            
           

            i++;

            
            if (i === titulos.length) {
                clearInterval(intervalo);
            }
        }, 3000);
    } catch (error) {
        console.error("Error al leer el archivo.", error);
    }
}

funcionAsincronica();