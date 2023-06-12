const express = require("express")
const userControllers = require("../controllers/user.controllers")
const router = express.Router()

//!Creacion de las rutas
router.route("/signup").post(userControllers.signupUser)
router.route("/login").post(userControllers.loginUser)
router.route("/:id/history").get(userControllers.historyTransfersbyUser)


module.exports = router