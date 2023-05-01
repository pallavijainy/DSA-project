const express = require("express");

const cors  = require("cors")
const { connection } = require("./db");
const { postModel } = require("./model/PostModel");
const { userModel } = require("./model/userModel");
const jwt = require("jsonwebtoken");
const { authorization } = require("./Middleware/Authorisation");
const app = express();

app.use(express.json());
app.use(cors())

app.get("/", async (req, res) => {
  const data = await userModel.find();
  res.send(data);
});

app.post("/users", async (req, res) => {
  try {
    const data = req.body;

    const user = new userModel(data);
    await user.save();

    console.log(data);
    res.send("user created");
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, name } = req.body;
  try {
    const user = await userModel.find({ email, name });
    //jwt
    if (user.length > 0) {
      const token = jwt.sign({ USERID: user[0]._id }, "secretkey");
      res.send({ msg: "LOGIN SUCCESSFULLY", token });
    } else {
      res.send("login failed");
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await userModel.find({ _id: id });

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.get("/allusers", async (req, res) => {
  try {
    
    const data = await userModel.find();

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

app.put("/users/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await userModel.findByIdAndUpdate(
      { _id: id },
      { name: req.body.name, bio: req.body.bio }
    );

    res.send("update");
  } catch (error) {
    res.send(error);
  }
});

app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await userModel.findByIdAndDelete({ _id: id });
    res.send("deleted");
  } catch (error) {
    res.send({ error: "something went wrong" });
  }
});

app.get("/analytics/users", async (req, res) => {
  try {
    const count = await userModel.countDocuments();
    console.log(count);
    res.send({ count });
  } catch (error) {
    res.send({ error: error.status });
  }
});

//post 

app.post("/posts", authorization, async (req, res) => {
  try {
    const data = req.body;

    const post = new postModel(data);

    await post.save();
    res.send(post);
  } catch (error) {
    res.send(error);
  }
});

//get post
 
app.get("/posts/:id" ,authorization , async(req,res)=>{
  try {
    const id = req.params.id
    const data = await postModel.find({_id:id})
    console.log(data)
    res.send(data)
  } catch (error) {
    res.send(error.message)
  }
});

//update

app.put("/posts/:id" , authorization , async(req,res)=>{
  try {
    const id = req.params.id
    const content = req.body;
    await postModel.findByIdAndUpdate({_id:id} , content)

    res.send("updated")
  } catch (error) {
    res.send(error.message)
  }
})

//delete
app.delete("/posts/:id" , authorization , async(req,res)=>{
  try {
    const id = req.params.id
  
    await postModel.findByIdAndDelete({_id:id})

    res.send("deleted")
  } catch (error) {
    res.send(error.message)
  }
})

//like

app.post("/posts/:id/like" , async(req,res)=>{
  try {
    const id = req.params.id;
    const data = await postModel.findById(id)
    data.likes++;
    const update = await postModel.findByIdAndUpdate({_id:id} , data)
    console.log(update)
    res.send(update)
 
  } catch (error) {
    res.send(error.message)
  }
})

app.post("/posts/:id/unlike" , async(req,res)=>{
  try {
    const id = req.params.id;
    const data = await postModel.findById(id)
    data.likes--;
    const update = await postModel.findByIdAndUpdate({_id:id} , data)
    console.log(update)
    res.send(update)
 
  } catch (error) {
    res.send(error.message)
  }
})


app.get("/analytics/posts" , async(req,res)=>{
  try {
    const total = await postModel.countDocuments()
    console.log(total)
    res.send({total})
  } catch (error) {
console.log(error)
  }
});

//top 

app.get("/analytics/posts/top-liked" , async(req,res)=>{
try {
  
const data = await postModel.find().sort({likes: -1}).limit(5)


  console.log(data)
  res.send(data)
} catch (error) {
  res.send(error.message)
}
})


app.listen(8000, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }

  console.log("running on the port 8000");
});
