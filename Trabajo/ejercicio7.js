/**
 *  Crear una función find que acepte un array y un callback y que:
 * 
    • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    • devuelva el elemento pasado como argumento del primer callback que devuelva true
    • sí ningún callback devuelve true, devuelva undefined
 */

    const inventario = [
        { name: "apples", quantity: 2 },
        { name: "bananas", quantity: 0 },
        { name: "cherries", quantity: 5 },
        { name: "coco", quantity: 3},
        { name: "grapes", quantity: 7}
      ];
      
    function find(array, callback) {
        for (let i = 0; i < array.length; i++) {

            if (callback(array[i])) {
                return array[i];
            }
        }
        return undefined;
    }

      function comprobar(fruticas) {
        return fruticas.name === "apples";
      }
      
      console.log(find(inventario, comprobar));