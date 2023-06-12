//! Importacion de las cors y express
const cors = require("cors")
const express = require("express")
//! Creacion de la app dandole las funciones de express
const app  = express()
//?Middlewares para que se acepte los JSON y se use las cors
app.use(express.JSON)
app.use(cors())

//!Importacion de las routes


//?Middleware para las routes y el paso al archivo routes



module.exports = app