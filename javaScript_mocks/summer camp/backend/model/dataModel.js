const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  name: { type: String, required:true },
  age: {type:String, required:true},
  class :{type:String},
  school:{type:String},
  parentname: {type:String , required:true},
  phone:{type:String , required:true},
  Mobile:{type:String },
  comment:{type:String},
});

const dataModel = mongoose.model("camp", dataSchema);
module.exports = { dataModel };
