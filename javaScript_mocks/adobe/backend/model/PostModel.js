
const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    id:{type:Number},
    // user_id:{type: mongoose.Schema.ObjectId , ref: "users"},
    user_id:{type: String},
   content:{type:String },
likes :{type:Number , min:0  ,default: 0,}
    
},{timestamps:true})

const postModel = mongoose.model("posts", postSchema)

module.exports = {postModel}