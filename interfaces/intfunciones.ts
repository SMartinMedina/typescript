interface General{
  (nombre:string, apellido:string, edad:number):void
}

let funcionGeneralUno:General
funcionGeneralUno = function(nombre:string,apellido:string,edad:number):void{
  console.log(`Nombre: ${nombre}. Apellido: ${apellido}. Edad: ${edad}`)
}

funcionGeneralUno("Santiago", "Jerbez", 34)
