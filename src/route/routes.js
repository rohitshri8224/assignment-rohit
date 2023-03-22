const router = require("express")
const userController = require("../controller/userController")



router.post("../createUser", userController.createUser)
router.post("../authentication", userController.authentication)

module.exports.router