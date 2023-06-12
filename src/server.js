require("dotenv").config()
const app = require("./app")
const {db} = require("./database/config")

//!AUTENTICACION Y SINCRONIZACION DE LA BASE DE DATO✌✌

db.authenticate()
    .then(() => console.log("Database authenticated"))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log("Database synced"))
    .catch(err => console.log(err))

    
//?Metodo Listen
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})