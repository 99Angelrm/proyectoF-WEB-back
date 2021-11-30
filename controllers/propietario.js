const Orden = require("../models/orden");
const Plato = require("../models/plato");
const mongoose = require("mongoose");

//CRUD
// CREATE PLATO
exports.postAgregarPlato = async (req,res)=>{
    const plato = new Plato(req.body)
    plato._id = new mongoose.Types.ObjectId()
    try{
        //Agregar el documento a la colección
        await plato.save()
        console.log(plato)
        console.log("platillo registrado")
        res.send({operacion:"correcta"})
    }catch(err){
        console.log(err)
        res.send({operacion: "incorrecta"})
    }
}
// READ Ordenes
exports.getObtenerOrden = async (req, res) => {
    try {
        const orden = await Orden.find({});
        res.status(200).json(orden);
    } catch (err) {
        console.log(err);
    }
};
// UPDATE PLATO
exports.postActualizarPlato = async(req,res)=>{
    //Filtro y cambio
    try{
        await Plato.findOneAndUpdate(req.body.titulo,req.body.ingredientes)
        console.log("Cambio realizado")
        res.json({operacion: "correcta"})
    }catch(err){
        console.log(err)
        res.json({operacion: "incorrecta"})
    }
}

//DELETE PLATO
exports.postBorrarPlato = async (req,res)=>{
    await Plato.findByIdAndRemove(req.body)
    console.log("Platillo eliminada")
    res.json({operacion: "correcta"})
}


