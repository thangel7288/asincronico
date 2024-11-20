/**
 * Reazliza tres Promises , algunas de las cuales se resuelvan y otras se rechacen. 
 * Utiliza Promise.allSettled() para obtener información sobre el estado de todas las Promises. 
 */

let numero = parseInt(prompt("Ingrese un número:"))

const promesita = function promesa1(parametro) {
    
    return new Promise((resolve, reject) => {
        
        if (parametro % 2 === 0) {
            resolve(`El número es ${parametro} par`)
        } else {
            reject(`El número ${parametro} no es par`)
        }
    })
}

const promesita2 = function promesa2(parametro) {
    return new Promise((resolve, reject) => {
        
        if (typeof(parametro) === "number") {
            resolve(`El ${parametro} es un número`)
        } else {
            reject(`El ${parametro} no es un número`)
        }
    })
}

const promesita3 = (parametro) => {
    return new Promise((resolve, reject) => {
        
        if ((parametro >= 0)) {
            resolve(`El ${parametro} es positivo`)
        } else {
            reject(`El ${parametro} es negativo`)
        }
    })
}

Promise.allSettled([promesita(numero), promesita2(numero), promesita3(numero)]).then((respuesta) => {
    respuesta.map((parametroCualquiera) => {
        console.log(parametroCualquiera.status);      
    })
})