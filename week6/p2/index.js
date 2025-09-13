const express = require("express")
const jwt = require("jsonwebtoken")
const cors = require("")
const JWT_SECRET = "ILOVEWEB"

const app = express();
app.use(express.json());
app.use(cors());


const users = [];


app.get("/", (req,res)=>{
  res.sendFile("./public/index.html");
})

app.post("/register", (req,res)=>{
  console.log(req);
  
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password
  })

  res.json({
    message: "user signed up"
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


function auth(req, res, next){

  const token = req.headers.authorization;
  const decodeToken = jwt.verify(token, JWT_SECRET);

  if(decodeToken.username){
    req.username = decodeToken.username;
    next();
  }else{
    res.json({
      message: "user not logged in!"
    })
  }
}





app.get("/me",auth,(req, res)=>{

  const username = req.username;

    const user = users.find(u=>{
      if(u.username==username){
        return true;
      }
    })

    res.json({
      username: user.username,
      password: user.password
    })



})


app.get("/todos",auth, (req,res)=>{
  
})
app.post("/todos", auth, (req,res)=>{

})
app.delete("/todos",auth, (req,res)=>{

})
app.put("/todos",auth, (req,res)=>{

})








app.listen(3000);