//! Importacion de las cors y express
const cors = require("cors")
const express = require("express")
//! Creacion de la app dandole las funciones de express
const app  = express()
//?Middlewares para que se acepte los JSON y se use las cors
app.use(express.json())
app.use(cors())

//!Importacion de las routes
const userRoutes = require("./routes/users.routes")
const tranferRoutes = require("./routes/tranfer.routes")

//?Middleware para las routes y el paso al archivo routes
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/transfers", tranferRoutes)


module.exports = app