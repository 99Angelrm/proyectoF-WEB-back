const mongoose = require("mongoose");

const OrdenSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        ciudad: String,
        pais: String,
        atractivo: String,
        contador: Number,
    },
    { collection: "Ordenes" }
);

const Orden = mongoose.model("Orden", OrdenSchema);

module.exports = Orden;
