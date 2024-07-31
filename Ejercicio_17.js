//Crea un programa que tome una lista de nombres y los ordene alfabéticamente.
function ordenarNombres(nombres) {
    return nombres.slice().sort((a, b) => a.localeCompare(b));
}

const listaDeNombres = ['Juan', 'Ana', 'Pedro', 'María', 'Luis'];
const nombresOrdenados = ordenarNombres(listaDeNombres);

console.log('Lista original:', listaDeNombres);
console.log('Lista ordenada:', nombresOrdenados);
