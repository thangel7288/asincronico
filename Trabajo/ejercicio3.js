
let numeros = [10, 20, 30, 40, 50];  

function funcion(array, callback) { 
    return array.map(callback);     

}

function duplicar(numero) { 
    return numero * 2;      
}


console.log(funcion(numeros, duplicar)); 