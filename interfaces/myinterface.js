function caminar(persona) {
    console.log("La persona " + persona.nombre + " ");
}
var new_persona = { nombre: "Rick" };
var new_persona_interface = { nombre: "Rick", apellido: "Juarez", edad: 20 };
caminar(new_persona_interface);
