class Vehiculo { //Clase Padre
    private numPuertas: number
    velocidad: number
    marca: string
    constructor(numPuertas:number, velocidad:number, marca:string) {
        this.numPuertas = numPuertas
        this.velocidad = velocidad
        this.marca = marca
    
    }
    getNumeroPuertas(): number {
        return this.numPuertas
    }
    setNumeroPuertas(numPuertas:number) {
        this.numPuertas = numPuertas
    }
}
//HERENCIA
class Auto extends Vehiculo {
    private cantRuedas: number
    constructor(numPuertas:number, velocidad:number, marca:string, cantRuedas:number){
        super(numPuertas, velocidad, marca)
        this.cantRuedas = cantRuedas
    }
    getCantRuedas(): number {
        return this.cantRuedas
    }
    setCantRuedas(cantRuedas:number) {
        this.cantRuedas = cantRuedas
    }
    getNumeroPuertas(): number {
        return super.getNumeroPuertas() + 200
    }
}
const Peugeot = new Auto(5, 180, "Peugeot", 4)
//si agrego private hago uso de la propiedad de encapsulamiento de POO, que seria tratar de utilizar las propiedad de mi clase utilizando los metodos que uno maneja
console.log(Peugeot.getNumeroPuertas())
//POLIFORMISMO cada propiedad se comporta de forma diferente dependiendo del lugar en donde estan

