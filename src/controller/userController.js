const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const createUser = async function (req, res) {
    try {
        let data = req.body
        if(!data){
            return res.status(400).send({status: false, message:"all fields are mandatory"})
        }
        let savedData = await userModel.create(data)
        return res.status(201).send({ status: true, data: savedData })
    } catch (err) {
        return res.status(500).send({ status: false, data: err })
    }
}
//=============================================================================================

const authentication = async function (req, res) {
    try {
        let data = req.body
        let { email, password } = data

        let check = await userModel.find({ email: email, password: password })
        if (!check.email) {
            return res.status(404).send({ status: false, message: "invalid email" })

        }
        if (!check.password) {
            return res.status(404).send({ status: false, message: "invalid password" })


        }

        let token = jwt.sign({
            userId: check._id.toString(),
            userStatus: active
        },
            "user details @123"
        )

        return res.status(201).send({ status: false, data: token })

    } catch (err) {
        return res.status(500).send({ status: false, message: err })
    }
}

module.exports.createUser = createUser
module.exports.authentication = authentication

