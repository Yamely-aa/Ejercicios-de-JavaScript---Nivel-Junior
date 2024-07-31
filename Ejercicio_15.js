//Crea un programa que tome un número como entrada y determine si es primo o no.
function esPrimo(numero) {
    if (numero <= 1) {
        return false; // Los números menores o iguales a 1 no son primos
    }
    if (numero === 2) {
        return true; // El 2 es el único número primo par
    }
    if (numero % 2 === 0) {
        return false; // Los números pares mayores que 2 no son primos
    }

    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

const numero = parseInt(prompt("Introduce un número para verificar si es primo:"), 10);
if (esPrimo(numero)) {
    console.log(`${numero} es un número primo.`);
} else {
    console.log(`${numero} no es un número primo.`);
}
