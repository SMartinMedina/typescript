var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.caminar = function () {
        console.log("caminar");
    };
    return Persona;
}());
