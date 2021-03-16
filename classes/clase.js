var Vehiculo = /** @class */ (function () {
    function Vehiculo(_marca, _modelo, _usado) {
        this.marca = _marca;
        this.modelo = _modelo;
        this.usado = _usado;
    }
    Vehiculo.prototype.arrancar = function () {
        console.log("El auto " + this.marca + " modelo: " + this.modelo + " arranca");
    };
    Vehiculo.prototype.frena = function () {
        console.log("El auto " + this.marca + " modelo: " + this.modelo + " frena");
    };
    return Vehiculo;
}());
var auto = new Vehiculo("Ford", 1999, true);
auto.arrancar();
