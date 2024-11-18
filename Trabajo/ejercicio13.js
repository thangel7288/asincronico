/**
 * Crea una promise que se resuelva después de 3 segundos y luego imprima "Promise resuelta" cuando se cumpla.
 */

function promesa() {

    return new Promise ((resolve, reject) => {
        
        setTimeout (function () {

            try {

                resolve("Promise resuelta");

            } catch (error) {
                Promise.reject("error")
            }
        }, 3000)
    });
}

promesa().then((retorno) => {
    console.log(retorno);
});