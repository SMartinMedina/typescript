class Padre{
  nombre:string
  edad:number

  constructor(_nombre:string, _edad:number){
    this.nombre = _nombre
    this.edad = _edad
  }
  mostrarNombre():void{
    console.log(this.nombre)
  }
}
class Hijo extends Padre{
  apellido:string

  constructor(_nombre:string, _edad:number, _apellido:string){
    super(_nombre, _edad)                                     //Uso el constuctor de la clase que extiende
    this.apellido = _apellido                                 //Agrego la inicializacion de los atributos particulares
  }
}

const padre = new Padre("Carlos", 50)
const hijo = new Hijo("Esteban", 20, "Tuero")

padre.mostrarNombre()
hijo.mostrarNombre()
