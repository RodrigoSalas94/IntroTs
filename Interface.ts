interface PersonaInterface {
    nombre: string
    edad?: number
    dni: number
}
const personaInterface: Partial <PersonaInterface> = {
    nombre: 'Juan',
    edad: 30,
    
}
// Partial se utiliza para hacer opcionales todas las propiedades de una interfaz en este caso sacamos dni y no tira error. 
//Las interfaces son contratos, osea que se deben cumplir las propiedas dadas. Con el signo ? indicamos que esa propiedad es opcional o sino con un Partial
//Lo contrario a Partial seria usar un Required que indica que por mas que un valor tenga el signo ? tenga que ser utilizado de todas formas
interface AlumnosInterface extends PersonaInterface {
    curso: string
}
const alumnosInterface: AlumnosInterface = {
    nombre: 'Rodri',
    curso: 'Typescript',
    dni: 37500200
}

const personaModificable: PersonaInterface = {
    nombre: 'Juan',
    dni: 37500200

}
personaModificable.nombre = 'Rodri'
//Forma correcta de hacerlo, crear un type con la propiedad y despues llamar a ese type en la const
type PersonaReadOnly = Readonly<PersonaInterface>

const personaNoModificable: PersonaReadOnly = {
    nombre: 'Juan',
    dni: 37520200
}

interface Curso {
    nombre: string
    duracion: number
}

interface RodriProgramming {
    nombre: string
    edad: number
    cursos: Curso[]
}

const logger = <T>(variable: T) => {
    console.log(variable)
}
logger<string>('Hola')
// La T representa a algo genérico

interface GenericType<T> {
    variable: T
}
const variable: GenericType<string> = {variable: 'esto es un string'}


