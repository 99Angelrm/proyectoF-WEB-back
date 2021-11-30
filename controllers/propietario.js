const Plato = require("../models/plato");
const mongoose = require("mongoose");
exports.postAgregar = async (req, res) => {
    try {
        const plato = new Plato(req.body);
        plato._id = new mongoose.Types.ObjectId();
        await plato.save();
        res.status(201).json({estado:"Correcto"})
    } catch (err) {
        console.log(err);
    }
};