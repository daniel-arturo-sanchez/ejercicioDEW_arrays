//Array para realizar pruebas
let programadores=[
    {nombre: 'Antonio', apellido1: 'González', apellido2: 'González', edad: 25, experiencia: 4,
   lenguajes: ['C++','JS', 'PHP']},
    {nombre: 'Juana', apellido1: 'Pérez', apellido2: 'Díaz', edad: 30, experiencia: 5, lenguajes:
   ['C','JS', 'Java']},
    {nombre: 'Pedro', apellido1: 'Abad', apellido2: 'García', edad: 24, experiencia: 15, lenguajes:
   ['Python','JS', 'Java','C++']}
   ]

export function ejercicioA (programadores){
    let resultado;
    /*  - Colección con todos los programadores. 
        - Para cada programador un objeto complejo con nombre, apellido1 
        y apellido2
        - Ordenados por nombre de forma ascendente*/
    resultado = programadores.map( programador => ({
        nombre: programador.nombre,
        apellido1: programador.apellido1,
        apellido2: programador.apellido2
    })).sort( 
        (programador1, programador2) => programador1.nombre.localeCompare(programador2.nombre)
    );

    return resultado;
}
export function ejercicioB (programadores){
    let resultado;
    /*  Colección con todos lo programadores incluyendo para cada programador los
        atributos originales más el atributo categoría que puede tener 2 valores:
        “junior” si tiene menos de 15 años de experiencia
        “senior” si tiene 15 o más años de experiencia.*/
    resultado = programadores.map( programador => ({
            ...programador,
            categoría: programador.experiencia < 15 ? "junior" : "senior"
        })
    )
    return resultado;
}

export function ejercicioC (programadores){
    let resultado;
    /*  Suma Total de años de experiencia de los programadores mayor que 24 años*/
    resultado = programadores.filter(programador => programador.exp > 24)
        .reduce((totalExperiencia, programador) => totalExperiencia = totalExperiencia + programador.experiencia, 0);
    return resultado;
}
export function ejercicioD (programadores, anios){
    let resultado;
    /*  Colección de programadores cuya experiencia es superior número de años
        pasado por parámetro.*/
    resultado = programadores.filter( programador => programador.experiencia > anios);
    return resultado;
}
export function ejercicioE (programadores, apellido1){
    let resultado;
    /*  Retorna el objeto programador cuyo apellido1 es el apellido1 pasado por parámetros*/
    resultado = programadores.find( programador => programador.apellido1 == apellido1);
    return resultado;
}
export function ejercicioF (programadores, apellido1){
    let resultado;
    /*  Retorna TRUE si hay algún programador cuyo apellido1 es el apellido1 pasado por parámetros.
        En caso contrario retorna FALSE*/
        resultado = programadores.some( programador => programador.apellido1 == apellido1);
    return resultado;
}
export function ejercicioG (claveDeLenguajes, ...lenguajesProgramacion){
    /* La función tiene un número variable de parámetros.
       El primero es una clave y resto son lenguajes de programación
       La función guarda en el localStorage con la clave los lenguajes como
       un string separados por comas.
       Ejemplo de paso de parámetros:
       ejercicio7("lenguajes", "PHP", "C++", "Java")
       Se almacena con la clave lenguajes el string "PHP,C++,Java"
    */
    localStorage.setItem(claveDeLenguajes, lenguajesProgramacion.join(","));
}
export function ejercicioH (nombre, apellido1, apellido2, edad ){
    let resultado = {};
    /* Retorna un objeto programador con 4 atributos (con el mismo nombre que los parámetros)
       con los datos pasados por parámetros.
       DEBES UTILIZAR notación de CORCHETES para crear los atributos

    */
   resultado["nombre"] = nombre;
   resultado["apellido1"] = apellido1;
   resultado["apellido2"] = apellido2;
   resultado["edad"] = edad

   return resultado;
}
export function ejercicioJ (nombre, apellidos){
    let nombreCompleto;
    /* Retorna un string concatenando los parámetros con plantilla de cadena de caracteres
    */
   nombreCompleto = `${nombre} ${apellidos}`
   return nombreCompleto;
}
export function ejercicioK (numSemanas){
    let milisegundo;
    /* Convierte numSemanas en milisegundos.Retorna el número total de milisegundo
    */
   milisegundo = numSemanas * 7 * 24 * 60 * 60 * 1000
   return milisegundo;
}

export * from "./DanielArturoSanchezGodoy.js";