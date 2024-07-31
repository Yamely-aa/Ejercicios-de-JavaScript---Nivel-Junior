//Escribe una función que tome un arreglo de números y retorne un nuevo arreglo con solo los números pares.
function obtenerNumerosPares(arreglo) {
    return arreglo.filter(numero => numero % 2 === 0);
}


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = obtenerNumerosPares(numeros);

console.log(pares); 
