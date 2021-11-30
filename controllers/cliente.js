const Plato = require("../models/plato");
const mongoose = require("mongoose");
exports.getObtenerPlatillos = async (req, res) => {
    try {
        const platillos = await Plato.find({});
        res.status(200).json(platillos);
    } catch (err) {
        console.log(err);
    }
};

