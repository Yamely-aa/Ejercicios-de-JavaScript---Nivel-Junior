//Crea una función que reciba una cadena de texto y retorne la misma cadena con la primera letra en mayúscula.
function capitalizarPrimeraLetra(cadena) {
    if (cadena.length === 0) {
        return cadena; 
    }
    
   
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

console.log(capitalizarPrimeraLetra("mi nombre es"));
console.log(capitalizarPrimeraLetra("yamely "));     
