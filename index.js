//imports
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

//import de un archivo local
const rutasCliente =  require("./routes/cliente")
const rutasPropetario =  require("./routes/propietario")


//crear la app
const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//endpoints
app.use('/',rutasCliente)
app.use('/store',rutasPropetario)


//listen
mongoose.connect('mongodb://user2:root@18.234.222.26:27017/base2?authSource=admin')
app.listen(8082,()=>{
    console.log("servidor activo en el puerto 8082")
})

