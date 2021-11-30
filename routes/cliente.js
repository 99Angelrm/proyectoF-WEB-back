//imports
const router = require('express').Router()

//controllers
const clienteController = require('../controllers/cliente')

//CRUD
//Create
router.get('/obtenerplatillos',clienteController.getObtenerPlatillos)

module.exports=router