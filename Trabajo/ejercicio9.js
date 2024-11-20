function dropWhile(arr, callback) {
    let result = []; 
    let drop = true;  
    for (let i = 0; i < arr.length; i++) {
        
        if (drop && !callback(arr[i], i, arr)) {
            drop = false; 
        }        
        if (!drop) {
            result.push(arr[i]);
        }
    }

    return result; // Devolvemos el array con los elementos restantes
}
