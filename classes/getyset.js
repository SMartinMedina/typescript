var Animal = /** @class */ (function () {
    function Animal(_nombre, _tamano) {
        this.nombre = _nombre;
        this.tamano = _tamano;
    }
    Object.defineProperty(Animal.prototype, "setNombre", {
        set: function (_nombre) {
            this.nombre = _nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "setTamano", {
        set: function (_tamano) {
            this.tamano = _tamano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "getTamano", {
        get: function () {
            return this.tamano;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
