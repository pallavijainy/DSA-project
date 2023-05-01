const express =  require("express")
const { connection } = require("./db");
const { dataModel } = require("./model/dataModel");
const cors = require("cors")

const app = express()
app.use(express.json());
app.use(cors())

app.post("/posts",  async (req, res) => {
    try {
      const data = req.body;
      console.log(data)
const user = new dataModel(data)
await user.save()
res.send("data saved")
console.log(user)
    } catch (error) {
      res.send(error);
    }
  });

  app.get("/admin" , async(req,res)=>{
    try {
      const data = await dataModel.find()
      res.send(data)
    } catch (error) {
      res.send(error)
    }
  })


app.listen(8000 , async()=>{
    try {
        await connection;
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
    console.log("running on the port 8000")
})