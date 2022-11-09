const { Schema, model } = require("mongoose");

const inmuebleShema = new Schema({
    piso: Number,
    letra: String,
    extension: Number,
    numero_habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    email_contacto: String,
});

module.exports = model("inmueble", inmuebleShema);
