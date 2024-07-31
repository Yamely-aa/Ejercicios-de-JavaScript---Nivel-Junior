//Escribe un programa que cuente el número de veces que aparece una letra específica en una cadena de texto.
function contarLetra(cadena, letra) {
  
    cadena = cadena.toLowerCase();
    letra = letra.toLowerCase();
    
    let contador = 0;


    for (let i = 0; i < cadena.length; i++) {

        if (cadena.charAt(i) === letra) {
            contador++;
        }
    }

    return contador;
}

console.log(contarLetra("Hola Mundo", "o")); 
console.log(contarLetra("JavaScript", "s")); 
console.log(contarLetra("Abracadabra", "a")); 
console.log(contarLetra("Testing", "t")); 
