const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "ILOVEWEB"

const app = express();
app.use(express.json());


const users = [];


app.post("/register", (req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password
  })

  res.json({
    "message": "user signed up"
  })



})



app.post("/login", (req, res)=>{
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(u=>{
    if(u.username==username && u.password ==password){
      return true;
    }
  })

  if(user){
    const token = jwt.sign({
      username: username
    },JWT_SECRET)

    res.json({token: token})
  }else{
    res.json("user not found, first register");
  }


})


app.get("/me",(req, res)=>{
  const token = req.headers.authorization;

  const decodeToken = jwt.verify(token, JWT_SECRET);

  if(decodeToken.username){
    const user = users.find(u=>{
      if(u.username==decodeToken.username){
        return true;
      }
    })

    res.json({
      username: user.username,
      password: user.password
    })
  }else{
    res.json({
      message: "token unavailable!"
    })
  }


})


app.listen(3000);