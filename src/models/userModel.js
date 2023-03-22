const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name : {
        type : String ,
        email : String,
        password : String,
        required : true
    }
})

module.exports = mongoose.model("user",userSchema);