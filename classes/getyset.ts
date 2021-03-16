class Animal{
  nombre:string
  tamano:number

  constructor(_nombre:string, _tamano:number){
    this.nombre = _nombre
    this.tamano = _tamano
  }

  set setNombre(_nombre:string){
    this.nombre = _nombre
  }

  set setTamano(_tamano:number){
    this.tamano = _tamano
  }

  get getNombre():string{
    return this.nombre
  }

  get getTamano():number{
    return this.tamano
  }
}
