//Escribe un programa que verifique si una variable tiene un valor definido o es `null` o `undefined`.

function esValorDefinido(variable) {
    return variable !== null && variable !== undefined;
}

let a;
let b = null;
let c = 42;
let d = "texto";

console.log(esValorDefinido(a)); // false, porque 'a' es undefined
console.log(esValorDefinido(b)); // false, porque 'b' es null
console.log(esValorDefinido(c)); // true, porque 'c' tiene un valor definido
console.log(esValorDefinido(d)); // true, porque 'd' tiene un valor definido
