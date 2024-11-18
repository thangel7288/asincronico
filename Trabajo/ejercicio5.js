/**
 * 
 * 
 * Crear una función filter que acepte un array y un callback y que:
 * Por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
 * Si dicho callback devuelve true, pushea el elemento a un nuevo array.
 * Devuelva el array final con los elementos que pasaron el "filtro".
 */




let array = [1,2,3,4,5,6,7,8,9,10]

const resultado = array.filter(num => num % 2 === 0);

console.log(resultado);