const express = require("express");
const { UserModel } = require("../Model/UserModel");

const UserRouter = express();

UserRouter.get("/", async (req, res) => {
  try {
   const data = await UserModel.find()
   res.send(data)
  } catch (error) {
    res.send("error");
  }
});

UserRouter.post("/addprofile", async (req, res) => {
  const data = req.body;
  try {
    const postdata = new UserModel(data);
    await postdata.save();
    res.send("data added");
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

UserRouter.put("/update/:id" , async(req,res)=>{
  const id = req.params.id;
  const update = req.body;
  console.log(id)
  try {
    const data = await UserModel.findByIdAndUpdate({_id:id},update)
    console.log(data)
    res.send({msg:"User Profile updated"})
  } catch (error) {
    res.send({msg:"something went wrong"})
  }
});

UserRouter.delete("/delete/:id" , async(req,res)=>{
  const id = req.params.id;
  try {
    await UserModel.findByIdAndDelete({_id:id})
    res.send("User Deleted")
  } catch (error) {
    res.send({msg:"something went wrong"})
  }
})

module.exports = { UserRouter };
