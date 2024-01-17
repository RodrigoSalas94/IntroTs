let mensaje: string = "Hola mundo"
mensaje = "Rodri"
mensaje = "Chau mundo"
console.log(mensaje)

/**Tipos en Js
 * number
 * string
 * boolean
 * null
 * undefined
 * object (acá entrar los arra)
 * function
 * 
 * Tipos en Ts
 * any (No usarlo!!)
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * Tipos inferidos
 */

let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extintos = true

//no es necesario especificar que tipo de dato es cada variable cuando las inicializamos ya que Ts se da cuenta de que es cada una

function rodri (config: any) {
    return config
}


let animales:string[] = ['perro', 'gato', 'ave']
let nums:number[] = [1, 2, 3]
let checks:boolean[] = []
let nums2: Array<number> = []

// animales.map (x => x."") el autocompletado sugiere segun el tipo de dato sin especificarlo

let tupla:[number,string] = [1, "rodri"]
// una tupla es un tipo de datos que permite representar un conjunto fijo de elementos ordenados, donde cada elemento puede tener un tipo de dato diferente. A diferencia de los arrays, las tuplas tienen un número fijo de elementos

const chica = 's' 
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'
//sin enum
//Pascal Case
//un enum proporciona una manera de asignar nombres más descriptivos a conjuntos de valores enteros. Es una lista de const
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'}
const variable1 = Talla.Grande
console.log(variable1)
//Si le agregamos un const antes del Enum nos genera un codigo mas ordenado 
const enum LoadingState { Idle, Loading, Success, Error}
const estado = LoadingState.Success
type Direccion = {
    numero: number
    calle: string
    pais: string
}
type Persona = {
    readonly id: number
    nombre?: string
    talla: Talla
    direccion: Direccion
    edad: number
}
const object: Persona = { 
    id: 1, 
    nombre: '', 
    edad: 30,
    talla: Talla.Chica,
    direccion: {
        numero: 142,
        calle: 'Falsa 123',
        pais: 'Argentina'
    } 
}
// Con el ? podemos hacer que sea opcional y con readonly obligamos a que el archivo sea solo de lectura, osea que no se pueda modificar
// Definiendo types podemos trabajar de manera mas ordenada

const arr: Persona[] = [] // va a ser un array que contenga los objetos de Persona 