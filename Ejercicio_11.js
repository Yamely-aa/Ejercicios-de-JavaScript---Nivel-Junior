//Escribe un programa que verifique si un número es positivo, negativo o cero, e imprima el resultado en la consola

function verificarNumero(numero) {
    if (numero > 0) {
        console.log('El número es positivo.');
    } else if (numero < 0) {
        console.log('El número es negativo.');
    } else {
        console.log('El número es cero.');
    }
}

verificarNumero(10); 
verificarNumero(-5); 
verificarNumero(0);  
