//Escribe una función que tome una fecha como argumento y retorne el día de la semana correspondiente.

function obtenerDiaDeLaSemana(fecha) {
   
    const diasDeLaSemana = [
        'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'
    ];

    const indiceDia = fecha.getDay();
    
    return diasDeLaSemana[indiceDia];
}

const fecha = new Date('2024-07-31'); 
console.log(obtenerDiaDeLaSemana(fecha)); 
