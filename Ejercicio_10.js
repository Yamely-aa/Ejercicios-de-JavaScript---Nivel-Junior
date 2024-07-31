//Escribe una función que reciba un arreglo de cadenas y retorne un arreglo con la longitud de cada cadena.

function obtenerLongitudes(cadenas) {
    return cadenas.map(cadena => cadena.length);
}

const arregloDeCadenas = ["Hola", "Mundo", "JavaScript", "es", "genial"];
const longitudes = obtenerLongitudes(arregloDeCadenas);

console.log(longitudes); 
