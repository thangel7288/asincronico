const persona = {
    nombre: "angel",
edad: 39  }

const manejador = {
    get (objetivo, propiedad){
        console.log(`obteniendo la propiedad ${propiedad}`);
        return objetivo[propiedad]
    },
    set(objetivo, propiedad, valor){
        if(Object.keys(objetivo).indexOf(propiedad) === -1){ 
        return console.log(`la propiedad ${propiedad} no existe`)
        }
        if (propiedad == "nombre" && !/^[a-zA-Z\s]+$/.test(valor)) {
            throw new Error ("Valor debe contener solo letras y espacios");
    
        }
        if (propiedad == "edad" && !/^[0-9]+$/.test(valor)) {
            throw new Error("Valor debe contener solo numeros");
            
        }
        objetivo[propiedad] = valor
    }
}
const proxy = new Proxy(persona, manejador);
proxy.nombre = "Angel lizarazo"
proxy.edad = "letras"
console.log(proxy.nombre);
console.log(persona);

