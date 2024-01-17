"use strict";
class Vehiculo {
    constructor(numPuertas, velocidad, marca) {
        this.numPuertas = numPuertas;
        this.velocidad = velocidad;
        this.marca = marca;
    }
    getNumeroPuertas() {
        return this.numPuertas;
    }
    setNumeroPuertas(numPuertas) {
        this.numPuertas = numPuertas;
    }
}
class Auto extends Vehiculo {
    constructor(numPuertas, velocidad, marca, cantRuedas) {
        super(numPuertas, velocidad, marca);
        this.cantRuedas = cantRuedas;
    }
    getCantRuedas() {
        return this.cantRuedas;
    }
    setCantRuedas(cantRuedas) {
        this.cantRuedas = cantRuedas;
    }
    getNumeroPuertas() {
        return super.getNumeroPuertas() + 200;
    }
}
const Peugeot = new Auto(5, 180, "Peugeot", 4);
console.log(Peugeot.getNumeroPuertas());
//# sourceMappingURL=classAuto.js.map