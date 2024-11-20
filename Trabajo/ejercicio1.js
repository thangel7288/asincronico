
function imprimirNumeros(desde, hasta) {
    

    desde = 5;
    hasta = 16;

    for (let i = desde; i <= hasta; i++) {
        setTimeout(() => {
            
            console.log(i);
            if (i === hasta) {
                
                console.log("terminado");
            }
        }, 2000);
    }
}

imprimirNumeros();