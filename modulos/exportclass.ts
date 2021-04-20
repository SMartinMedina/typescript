class Persona{
  nombre:string
  edad:number

  constructor(nombre:string, edad:number){
    this.nombre = nombre
    this.edad = edad
  }

  caminar():void {
    console.log("caminar")
  }
}

export default Persona
