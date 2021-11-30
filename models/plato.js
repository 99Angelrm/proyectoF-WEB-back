const mongoose = require("mongoose");

const PlatoSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        src: String,
        title: String,
        text: String,
        ingredientes: [String],
    },
    { collection: "Platillos" }
);

const Plato = mongoose.model("Plato", PlatoSchema);

module.exports = Plato;
