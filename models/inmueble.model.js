const { Schema, model } = require("mongoose");

const inmuebleShema = new Schema({
    piso: {
        type: Number,
        min: [1, "El número tiene que se mayor que 0"],
        required: ["Introduce el campo PISO"],
    },
    letra: {
        type: String,
        required: ["Introduce el campo LETRA"],
    },
    extension: {
        type: Number,
        min: [1, "El número tiene que se mayor que 0"],
        required: ["Introduce el campo EXTENSIÓN"],
    },
    numero_habitaciones: {
        type: Number,
        min: [1, "El número tiene que se mayor que 0"],
        required: ["Introduce el campo NUM_HABITACIONES"],
    },
    alquilado: {
        type: String,
        enum: {
            values: ["SI", "NO"],
            mesage: "La mesa solo puede ser SI o NO",
        },
    },
    nombre_propietario: {
        type: String,
        required: ["Introduce el campo NOMBRE_PROPIETARIO"],
    },
    email_contacto: {
        type: String,
        required: ["Introduce el campo EMAIL_CONTACTO"],
    },
});

module.exports = model("inmueble", inmuebleShema);
