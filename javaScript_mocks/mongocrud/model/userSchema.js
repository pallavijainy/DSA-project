const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    id:{type:Number},
    name:{type:String}
})


const userModel = mongoose.model("practicecrud" , userSchema)


module.exports = {userModel}