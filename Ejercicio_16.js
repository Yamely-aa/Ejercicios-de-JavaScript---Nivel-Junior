//Escribe una función que reciba un número como argumento y retorne `true` si es un número par, o `false` si es impar.
function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(4));  // Imprime: true
console.log(esPar(7));  // Imprime: false
