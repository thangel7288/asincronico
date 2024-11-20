// Usar un proxy para la validación de los valores de propiedades

// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola

const usuario = {
    edad: 30,
    usuario: "angel",
    email: "militom728@gmail.com",
    fecha: "19/11/2024"
}
const mediador = {
    get(objetivo, propiedad){
        console.log(`obteniendo la propiedad ${propiedad}`);
        return objetivo[propiedad]
        
    },set(objetivo, propiedad, valor){
    if (Object.keys(objetivo).indexOf(propiedad) === -1) {
        return console.log(`la propiedad ${propiedad} no existe`);
    
    }if (propiedad === "edad" && !/^[0-9]+$/.test(valor)) {
        throw new Error("Solo debe contener números");
        
    }
    objetivo[propiedad] = valor;
    if (propiedad == "usuario" && !/^[a-zA-Z0-9]+$/.test(valor)) {
        throw new Error("debe contener letras y numeros");    
    }
    objetivo[propiedad] = valor
    if (propiedad == "email" && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(valor)) {
        throw new Error("error, correo electronico no valido");    
    }
    objetivo[propiedad] = valor
    if (propiedad == "fecha" && !/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(valor)) {
        throw new Error("fecha incorrecta");
        
    }
    objetivo[propiedad] = valor
    
    }
}
const proxy = new Proxy(usuario, mediador);
proxy.edad = 25;
proxy.usuario = "Angellizarazo25";
proxy.email = "militom728@gmail.com";
proxy.fecha = "19/11/2024";
console.log(proxy.edad);
console.log(usuario);
