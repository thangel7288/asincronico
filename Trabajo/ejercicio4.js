/**
 * Crear una función MAP que acepte un array y un callback y que:
 * Por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
 * Obtenga el resultado.
 * Lo pushee a un nuevo array.
 * Devuelva el array final con el resultado de cada una de las llamadas al callback. */

let numeros = [10, 20, 30, 40, 50];  // Se crea un array con el nombre números.

function funcion(array, callback) { // Se crea una function con el nombre funcion y dos paramentros.
    return array.map(callback);     // retorta en el array, el .map lo recorre y a cada posición aplica la callback.

}

function duplicar(numero) { // Se crea una funcion duplicar con un parametro
    return numero * 2;      // Retorna el valor numero, que es el número de cada posición del array y lo múltiplica x 2
}


console.log(funcion(numeros, duplicar)); // Muestra por consola, llama a la funcion y los parametros de numero y múltiplicar.