const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")

app.use(express.json());


const users = [];
const JWT_SECRET = "ilovejwt"




app.post("/signup", (req,res)=>{
  // input validation 
  const username = req.body.username
  const password = req.body.password

  users.push({
    username: username,
    password: password
  })

  res.json({
    message: "you are signed up"
  })
  console.log(users);
  
})


app.post("/signin", (req, res)=>{
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(u=>{
    if(u.username == username && u.password == password){
      return true;
    }else{
      return false;
    }
  })

  if(user){
    const token = jwt.sign({
      username : username
    }, JWT_SECRET) //convert their usname to a jwt 

    console.log(token);
    
    // user.token = token;

    res.json({
      token: token
    })
  }else{
    res.status(403).send({
      message: "Invalid username or password"
    })
  }
  console.log(users);
  
})



app.get("/me", (req, res)=>{
  const token = req.headers.authorization;   //jwt

  console.log(token);
  const decodedInformation = jwt.verify(token, JWT_SECRET);   // json object { username: "raushan"}

  console.log(decodedInformation);
  
  const user = users.find(u => {
    if(u.username == decodedInformation.username){
      return true;
    }
  })

  // Object.values(user).forEach(value=>{
  //   console.log(value);
    
  // })
  

  console.log( "user" + user);
  

  if(user){
    res.json({
      username: user.username,
      password: user.password
      
    })
  }else{
    res.json({
      message: "token invalid"
    })
  }
  console.log(users);
  

})




app.listen(3000);