//Escribe una función que tome un arreglo de números y retorne la suma de todos los números en el arreglo.

function sumarArreglo(numeros) {
   
    return numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
}

const arreglo = [1, 2, 3, 4, 5];
const suma = sumarArreglo(arreglo);
console.log(suma);
