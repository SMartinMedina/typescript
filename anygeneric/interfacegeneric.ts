interface Persona<T>{
  nombre:T
}

let obj1:Persona<string> = {nombre: "string"} 
let obj2:Persona<number> = {nombre: 123}
let obj3:Persona<boolean> = {nombre: true}
