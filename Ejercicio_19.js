//Crea un programa que simule el lanzamiento de un dado (número aleatorio entre 1 y 6) y muestre el resultado.
function lanzarDado() {
    
    const resultado = Math.floor(Math.random() * 6) + 1;
    return resultado;
}


const resultadoDado = lanzarDado();
console.log(`El resultado del lanzamiento del dado es: ${resultadoDado}`);
