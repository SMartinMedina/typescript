interface Persona{
  //atributos
  readonly nombre: string
  apellido: string
}

let pers:Persona = {nombre: "Carlos", apellido: "Muñoz"}
//pers.nombre = 'Roberto' // Esta linea rompe porque el atributo es de readonly
console.log(pers)
