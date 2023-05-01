const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://pallavijainy:pallavijainy@cluster0.qxpdj1z.mongodb.net/adobe?retryWrites=true&w=majority")


module.exports ={connection}