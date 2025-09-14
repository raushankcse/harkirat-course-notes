const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")
const JWTSECRET = "hellofolks"
const {UserModel, TodoModel} = require("./db")

mongoose.connect("mongodb+srv://raushankcse_db_user:01032003@cluster0.igfpjot.mongodb.net/todo");

const app = express();

app.use(express.json());



app.post("/signup", async (req, res)=>{

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;


  await UserModel.create({
    name: name,
    email: email,
    password: password
  })


  res.json({
    message : "you are signed up!"
  })

});


app.post("/signin", async (req, res)=>{

  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password
  })

  if(user){
    const token = jwt.sign({
      id: user._id,
    }, JWTSECRET);
    res.status(200).json({
      message: "user logged in",
      token: token
    })
  }else{
    res.status(403).json({
      message: "incorrect credentials"
    })
  }

});

function auth(req, res, next){
  
  const token = req.headers.authorization;
  if(!token){
    res.status(403).json({
      message: "sign in again, token expired!"
    })
  }
  try {
    const decodeToken = jwt.verify(token, JWTSECRET);
    if(decodeToken){
      req.id = decodeToken.id;
      next();
    }
  } catch (error) {
    res.status(403).json("Unauthorized users");
  }
}

app.post("/todo", auth, async (req, res)=>{

  const userId = req.id;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    title: title,
    done: done,
    userId: userId
  })

  res.status(200).json({
    message: "todo created"
  })



});


app.get("/todos",auth, async (req,res)=>{

  const userId = req.id;

  const todos = await TodoModel.find({
    userId: userId
  })
  

  if(todos.length>0){
    res.json({
      todos: todos
    })
  }

  res.json({
    message: "no todos found"
  })


});


app.listen(3000);