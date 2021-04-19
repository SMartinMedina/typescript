function MostrarMediaPeso(persona) {
    var media = persona.altura / persona.peso;
    if (persona.nombre) {
        return persona.nombre + " tiene una altura media de " + media;
    }
    else {
        return "Persona tiene una altura media de " + media;
    }
}
var persona = { altura: 1.80, peso: 70 };
var persona_nombre = { nombre: "Roberto", altura: 1.80, peso: 70 };
console.log(MostrarMediaPeso(persona));
console.log(MostrarMediaPeso(persona_nombre));
