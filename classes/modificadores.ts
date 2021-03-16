class Persona{                //Por default public
  nombre:string               //Por default public
  edad:number                 //public explicito
  private dni:number          //privado, solo lo puede usar la clase que lo declara
  protected domicilio:string  //protected, solo lo puede usar la clase que lo declara y las que heredan de ella

  constructor(_nombre:string,_edad:number,_dni:number,_domicilio:string){
    this.nombre = _nombre
    this.edad = _edad
    this.dni = _dni
    this.domicilio = _domicilio
    console.log(this.dni)     //Solo desde la esta clase se puede utiliza este atributo private
  }

}
class Ciudadano extends Persona{
  nacionalidad:string
  constructor(_nombre:string, _edad:number, _dni:number, _domicilio:string, _nacionalidad:string){
    super(_nombre, _edad, _dni, _domicilio)
    this.nacionalidad = _nacionalidad
    console.log(this.domicilio) //Solo desde la esta clase se puede utiliza este atributo protected, declarada en el Padre
  }
}

const pers = new Persona("Carlos", 20, 11223322, "San Jose 102")
const ciud = new Ciudadano("Sandra", 20, 21311232, "Ceballos 2122", "Argentina")

// pers.dni       //no puede ser llamada por fuera de la clase
// pers.domicilio       //no puede ser llamada por fuera de la clase o de una de sus hijas
