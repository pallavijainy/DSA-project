const express = require("express");
const { Connection } = require("./config/db");
const  {UserRouter}  = require("./Routes/UserRouter");
const cors = require("cors")
const app = express();
app.use(cors())

app.use(express.json())
app.use("/user",UserRouter);

app.listen(8000, async () => {
  try {
    await Connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }

  console.log("app listen to port 8000");
});
