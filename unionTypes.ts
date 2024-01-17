interface HumanoInterface {
    nombre: string
    edad?: number
    dni: number
}

interface AlumnoInterface {
    curso: string
}

const alumnoOPersona: AlumnoInterface | HumanoInterface = {
    
    curso: 'Angular',
    dni: 3752000
}
//Hay que satisfacer al menos a algunas de las dos interfaces para que funcione usando |

const alumnoYPersona: AlumnoInterface & HumanoInterface = {
    
    nombre: 'Rodri',
    dni: 3752000,
    curso: 'Typescript'
}
//Hay que satisfacer las dos interfaces para que funcione usando &