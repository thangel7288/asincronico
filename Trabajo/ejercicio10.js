

    const _ = require('lodash');

    function libros(array, callback) {
       
       const nuevoarray = _.takeWhile(array, callback);
        console.log('Libros seleccionados:', nuevoarray);  
        return nuevoarray;
    }
    
    function callback(libro) {
        return libro.charAt(0).toUpperCase() === 'M';  
    }
    
    const array = [
      "Matar a un ruiseñor", 
      "Matar a un león", 
      "1984", 
      "Los miserables", 
      "Memorias de una geisha", 
      "El amor en los tiempos del cólera"
    ];
    
    libros(array, callback);