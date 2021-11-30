const Orden = require("../models/orden");
const Plato = require("../models/plato");
const mongoose = require("mongoose");

//CRUD
// CREATE AND ORDER 
exports.postAgregarOrden = async (req,res)=>{
    const orden = new Orden(req.body)
    orden._id = new mongoose.Types.ObjectId()
    try{
        //Agregar el documento a la colección
        await orden.save()
        console.log(orden)
        console.log("orden registrado")
        res.send({operacion:"correcta"})
    }catch(err){
        console.log(err)
        res.send({operacion: "incorrecta"})
    }
}
// READ PLATILLOS
exports.getObtenerPlatillos = async (req, res) => {
    try {
        const platillos = await Plato.find({});
        res.status(200).json(platillos);
    } catch (err) {
        console.log(err);
    }
};
// UPDATE ORDER
exports.postActualizarOrden = async(req,res)=>{
    //Filtro y cambio
    try{
        await Orden.findOneAndUpdate({nombre:req.body.nombre},{title:req.body.title})
        console.log("Cambio realizado")
        res.json({operacion: "correcta"})
    }catch(err){
        console.log(err)
        res.json({operacion: "incorrecta"})
    }
}

//DELETE ORDER 
exports.postBorrarOrden = async (req,res)=>{
    await Orden.findOneAndRemove(req.body)
    console.log("Orden eliminada")
    res.json({operacion: "correcta"})
}


