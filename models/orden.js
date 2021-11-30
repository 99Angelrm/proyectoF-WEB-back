const mongoose = require("mongoose");

const OrdenSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        src: String,
        title: String,
        text: String,
        ingredientes: [String],
        nombre: String,
        direccion: String,
        telefono: Number,
        
    },
    { collection: "Ordenes" }
);

const Orden = mongoose.model("Orden", OrdenSchema);

module.exports = Orden;
