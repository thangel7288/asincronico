function takeWhile(arr, callback) {
    let result = []; 
    
    for (let i = 0; i < arr.length; i++) {
        
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        } else {
            
            break;
        }
    }
    return result; 
}
