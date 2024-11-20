const primerResultado = promesa(5)


const segundoResultado = promesa(15)


const terceroResultado = promesa(35)

function promesa(numero) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(numero)
        }, 1000);

    })
}

primerResultado.then((resultado1) => {

    console.log("El primer resultado es: " + resultado1);
segundoResultado.then((resultado2) => {

    console.log("El segundo resultado es: " + resultado2);
terceroResultado.then((resultado3) => {
    
    console.log("El tercer resultado es: " + resultado3);

    const sumaTotal = resultado1 + resultado2 + resultado3;
    console.log("La sumatoria total de los anteriores resultados es: " + sumaTotal);
})
})
})