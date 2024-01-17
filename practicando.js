"use strict";
const tRex = {
    tipo: 'Reptil',
    alimentacion: 'carnivoro',
    esperanzadevida: 15,
    extinto: true
};
const conejo = {
    tipo: 'Mamifero',
    alimentacion: 'herviboro',
    esperanzadevida: 5,
    extinto: false
};
const perro = {
    tipo: 'Mamifero',
    alimentacion: 'omnivoro',
    esperanzadevida: 15,
    extinto: false,
    domestico: true
};
class Instrumentos {
    constructor(tipo, material, vidaUtil) {
        this.tipo = tipo;
        this.material = material;
        this.vidaUtil = vidaUtil;
    }
}
class Cuerdas extends Instrumentos {
    constructor(tipo, material, vidaUtil, cuerdas) {
        super(tipo, material, vidaUtil);
        this.cuerdas = cuerdas;
    }
}
const guitarra = new Cuerdas('cuerdas', 'madera', 20, true);
var Juegos;
(function (Juegos) {
    Juegos["Pc"] = "Gta";
    Juegos["Playstation"] = "Fifa";
    Juegos["Nintendo"] = "Mario";
})(Juegos || (Juegos = {}));
const jugador = {
    nombre: 'Rodri',
    edad: 29,
    pais: 'Argentina',
    juegos: Juegos.Pc,
    consola: {
        nombre: 'Pc',
        año: 2018
    }
};
//# sourceMappingURL=practicando.js.map