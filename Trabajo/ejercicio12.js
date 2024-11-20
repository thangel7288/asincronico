
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Este fué el intervalo de tiempo que transcurrió: ${ms} (milisegundos)`);
        }, ms);
    });
}


delay(3000).then((message) => {
    console.log(message);
    alert("Se ejecuta luego de 3 seg.")

    
})