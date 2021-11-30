//imports
const router = require('express').Router()

//controllers
const propietarioController = require('../controllers/propietario')

//CRUD CONTENIDO
//Create
router.post('/agregarPlatillo',propietarioController.postAgregarPlato)
router.get('/obtenerOrden',propietarioController.getObtenerOrden)
router.post('/actualizarPlatillo',propietarioController.postActualizarPlato)
router.post('/borrarPlatillo',propietarioController.postBorrarPlato)


module.exports=router