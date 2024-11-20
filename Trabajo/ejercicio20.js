/**
 * Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego 
 * utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.
 */

const primesaPromesa = function promesa1(numero) {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero)
        }, 1000);
    })
}

const segundaPromesa = function promesa2(numero) {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero)
        }, 2000);
    })
}

const terceraPromesa = function promesa3(numero) {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero)
        }, 3000);
    })
}

Promise.all([primesaPromesa(5), segundaPromesa(15), terceraPromesa(35)]).then((mensaje) => {
    console.log(`Las promesas se han cumplido a plenitud.\n`, mensaje);
})