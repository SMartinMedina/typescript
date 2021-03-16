let str:string                          //creacion variable string
str = "aaaa"                            //inicializacion variable
let num:number
num = 2
let bool:boolean
bool = true
let strArray:string[] = ["a","b","c"]   //inicializando en la misma linea de creacion
let numArray:number[] = [1, 2, 3, 4]    //inicializando en la misma linea de creacion
let boolArray:boolean[] = [true, false] //inicializando en la misma linea de creacion
let tupla: [string, number, boolean] = ["tupla", 7, true] //variable tupla

console.log("String creada e inicilizada en distintas lineas: " + str)
for(let i:number = 0; i < strArray.length ; i++){
  console.log("Array de String creada e inicilizada en la misma linea (pos: " + i + "): " + str[i])
}
console.log("Number creada e inicilizada en distintas lineas: " + num)
for(let i:number = 0; i < numArray.length ; i++){
  console.log("Array de Number creada e inicilizada en la misma linea (pos: " + i + "): " + numArray[i])
}
console.log("Boolean creada e inicilizada en distintas lineas: " + bool)
for(let i:number = 0; i < boolArray.length ; i++){
  console.log("Array de Number creada e inicilizada en la misma linea (pos: " + i + "): " + boolArray[i])
}
for(let i:number = 0; i < boolArray.length ; i++){
  console.log("Array de Tupla creada e inicilizada en la misma linea (pos: " + i + "): " + tupla[i])
}
