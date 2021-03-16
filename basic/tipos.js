var str; //creacion variable string
str = "aaaa"; //inicializacion variable
var num;
num = 2;
var bool;
bool = true;
var strArray = ["a", "b", "c"]; //inicializando en la misma linea de creacion
var numArray = [1, 2, 3, 4]; //inicializando en la misma linea de creacion
var boolArray = [true, false]; //inicializando en la misma linea de creacion
var tupla = ["tupla", 7, true]; //variable tupla
console.log("String creada e inicilizada en distintas lineas: " + str);
for (var i = 0; i < strArray.length; i++) {
    console.log("Array de String creada e inicilizada en la misma linea (pos: " + i + "): " + str[i]);
}
console.log("Number creada e inicilizada en distintas lineas: " + num);
for (var i = 0; i < numArray.length; i++) {
    console.log("Array de Number creada e inicilizada en la misma linea (pos: " + i + "): " + numArray[i]);
}
console.log("Boolean creada e inicilizada en distintas lineas: " + bool);
for (var i = 0; i < boolArray.length; i++) {
    console.log("Array de Number creada e inicilizada en la misma linea (pos: " + i + "): " + boolArray[i]);
}
for (var i = 0; i < boolArray.length; i++) {
    console.log("Array de Tupla creada e inicilizada en la misma linea (pos: " + i + "): " + tupla[i]);
}
