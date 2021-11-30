//imports
const router = require('express').Router()

//controllers
const clienteController = require('../controllers/cliente')

//CRUD

//Create
router.post('/ordenar',clienteController.postAgregarOrden)
router.get('/obtenerplatillos',clienteController.getObtenerPlatillos)
router.post('/cambiarorden',clienteController.postActualizarOrden)
router.post('/borrarorden',clienteController.postBorrarOrden)
router.get('/borrartodo',clienteController.borrar)
module.exports=router