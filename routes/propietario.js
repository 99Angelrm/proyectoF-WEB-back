//imports
const router = require('express').Router()

//controllers
const propietarioController = require('../controllers/propietario')

//CRUD CONTENIDO
//Create
router.post('/add',propietarioController.postAgregar)

module.exports=router