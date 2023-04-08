const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    id:{type:number},
    image:{type:string},
    brand:{type:string}
})

const productModel = mongoose.model("Product" , productSchema )

module.exports ={productModel};