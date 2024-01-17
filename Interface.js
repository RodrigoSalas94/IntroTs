"use strict";
const personaInterface = {
    nombre: 'Juan',
    edad: 30,
};
const alumnosInterface = {
    nombre: 'Rodri',
    curso: 'Typescript',
    dni: 37500200
};
const personaModificable = {
    nombre: 'Juan',
    dni: 37500200
};
personaModificable.nombre = 'Rodri';
const personaNoModificable = {
    nombre: 'Juan',
    dni: 37520200
};
const logger = (variable) => {
    console.log(variable);
};
logger('Hola');
const variable = { variable: 'esto es un string' };
//# sourceMappingURL=Interface.js.map