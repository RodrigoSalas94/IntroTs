interface Animales {
    tipo: string
    alimentacion: string
    esperanzadevida: number
    extinto: boolean

}

const tRex: Animales = {
    tipo: 'Reptil',
    alimentacion: 'carnivoro',
    esperanzadevida: 15,
    extinto: true
}

const conejo: Animales = {
    tipo: 'Mamifero',
    alimentacion: 'herviboro',
    esperanzadevida: 5,
    extinto: false
}

interface AnimalDomestico extends Animales {
    domestico: boolean
}

const perro: AnimalDomestico = {
    tipo: 'Mamifero',
    alimentacion: 'omnivoro',
    esperanzadevida: 15,
    extinto: false,
    domestico: true
}

class Instrumentos {
    tipo: string
    material: string
    vidaUtil: number
    constructor(tipo:string, material: string, vidaUtil: number){
        this.tipo = tipo
        this.material = material
        this.vidaUtil = vidaUtil
    }
}

class Cuerdas extends Instrumentos {
    cuerdas: boolean
    constructor(tipo:string, material: string, vidaUtil: number, cuerdas: boolean){
        super(tipo, material, vidaUtil)
        this.cuerdas = cuerdas
    }

}
const guitarra = new Cuerdas('cuerdas', 'madera', 20, true)

enum Juegos  { Pc = 'Gta', Playstation = 'Fifa', Nintendo = 'Mario'}

type Consola = {
    nombre: string
    año: number
}

type Jugador = {
    nombre: string
    edad: number
    pais: string
    juegos: Juegos
    consola: Consola
}
const jugador: Jugador = {
    nombre: 'Rodri',
    edad: 29,
    pais: 'Argentina',
    juegos: Juegos.Pc,
    consola : {
        nombre: 'Pc',
        año: 2018
    }
}