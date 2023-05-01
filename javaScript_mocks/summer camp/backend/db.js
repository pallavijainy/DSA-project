const mongooose = require("mongoose")

const connection = mongooose.connect("mongodb+srv://pallavijain:pallavijain@cluster0.hqmgtdu.mongodb.net/summercamp?retryWrites=true&w=majority")

module.exports  = {connection}