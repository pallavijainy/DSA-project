const express = require("express")
const { connection } = require("./config/db")
const { productModel } = require("./models/product.model")


const app = express()
app.use(express.json())


app.get("/all" , async(req,res)=>{
    try {
        await productModel.insertMany()
    } catch (error) {
        
    }
})


app.listen(4500 , async()=>{
    try {
        await connection;
        console.log("connected to db")
        
    } catch (error) {
        console.log({"msg":"something went wrong",error:error.message})
    }

    console.log("listening to servre")
})