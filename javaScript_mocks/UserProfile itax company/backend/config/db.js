const mongoose = require("mongoose")

const Connection = mongoose.connect("mongodb+srv://pallavi:pallavi@cluster0.y8z3h4p.mongodb.net/itaxprofile?retryWrites=true&w=majority")

module.exports ={Connection}

