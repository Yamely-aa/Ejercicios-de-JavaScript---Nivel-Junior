//Escribe una función que reciba un objeto con propiedades 
//`nombre` y `edad` y retorne una cadena en el formato: 'Nombre: [nombre], Edad: [edad]'.

function formatoPersona(persona) {
    return `Nombre: ${persona.nombre}, Edad: ${persona.edad}`;
}


const persona = {
    nombre: 'Yamely',
    edad: 18
};

console.log(formatoPersona(persona)); 
