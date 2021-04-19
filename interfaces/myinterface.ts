interface Persona{
  //atributos
  nombre:string
  apellido:string
  edad:number
}

function caminar(persona:Persona){
  console.log("La persona " + persona.nombre+ " " );
}

let new_persona = {nombre: "Rick"}
let new_persona_interface:Persona = {nombre: "Rick", apellido: "Juarez",edad:20}

caminar(new_persona_interface);
