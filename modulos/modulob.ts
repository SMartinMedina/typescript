import {nombre,Shape,Persona, myFunction} from './moduloa'
import * as moduloA from './moduloa'                        //Trae todas las funciones, classes, const . No recomendable si no se usan todas, porque se usen o no se cargan todas en memoria.
//import {Shape} from './moduloa'
console.log(moduloA.nombre)

const square:Shape = {nombre: 'cuadrado'}
