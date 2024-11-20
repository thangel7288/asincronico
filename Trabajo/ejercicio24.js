const persona = {
    nombre: "angel",
edad: 39  }

const manejador = {
    get (objetivo, propiedad){
        console.log(`obteniendo la propiedad ${propiedad}`);
        return objetivo[propiedad]
    },
    set(objetivo, propiedad, valor){
        console.log(Object.keys(objetivo));
        
        if (propiedad == "nombre" && !isNaN(valor)) {
            throw new Error ("Valor no permitido");
    
        }
        objetivo[propiedad] = valor
    }
}
const proxy = new Proxy(persona, manejador);
proxy.nombre = "Angel lizarazo";
console.log(proxy.nombre);
console.log(persona);

