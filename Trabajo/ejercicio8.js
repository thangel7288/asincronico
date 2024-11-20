/**  Crear una función findIndex que acepte un array y un callback y que:
    • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    • devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
    • sí ningún callback devuelve true, devuelva undefined
 */
    const array1 = [5, 12, 8, 130, 44];




    const isLargeNumber = (element) => element > 13;


    
    console.log(array1.findIndex(isLargeNumber));
    
    