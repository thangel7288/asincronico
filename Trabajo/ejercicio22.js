/**
 * Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
 * lista de elementos uno por uno
 */

const arrayColors = [`rojo`,`azul`,`verde`,`amarillo`,`negro`];

const funcionAsincrona = async () => {
    try {
        setTimeout(() => {
            
            for (let i = 0; i < arrayColors.length; i++) {
                const color = arrayColors[i];
                console.log(color);
            }
        }, 5000);
    } catch (error) {
        console.log("No salió lo que se tenía previsto:/");
        
    }
}

funcionAsincrona();