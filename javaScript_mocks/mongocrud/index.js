const express = require("express");
const { connection } = require("./db");
const { userModel } = require("./model/userSchema");

const app = express();
app.use(express.json());

//get
app.get("/", async(req, res) => {
 const users = await userModel.find()
 res.send(users)
});

//add
app.post("/add", async (req, res) => {
  const data = req.body;
  const user = new userModel(data);
  await user.save();

  console.log(data);
  res.send("user created");
});

//query
app.get("/users" , async(req,res)=>{
    const query = req.query
    const users = await userModel.find(query)
    res.send(users)
})

//patch

app.patch("/update/:id" ,async(req,res)=>{
    const userid = req.params.id
    const payload = req.body
    try {
       const check = await userModel.findByIdAndUpdate({_id:userid} , payload) 
       res.send(check)
    } catch (error) {
        res.send({"err":"something went wrong"})
    }
})

//delete

app.delete("/delete/:id", async(req,res)=>{
    const id = req.params.id
    try {
        await userModel.findByIdAndDelete({_id:id})
        res.send("deleted")
    } catch (error) {
        console.log("err")
        res.send("error")
    }
})



//connect and run on port
app.listen(4500, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("running on port 4500");
});
