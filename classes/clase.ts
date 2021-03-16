class Vehiculo{
  marca:string
  modelo:number
  usado:boolean

  constructor(_marca:string, _modelo:number, _usado:boolean){
    this.marca = _marca
    this.modelo = _modelo
    this.usado = _usado
  }

  arrancar():void{
    console.log("El auto " + this.marca +" modelo: "+ this.modelo + " arranca")
  }
  frena():void{
    console.log("El auto " + this.marca +" modelo: "+ this.modelo + " frena")
  }

}

const auto = new Vehiculo("Ford", 1999, true)
auto.arrancar()
