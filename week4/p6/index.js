const express = require("express");
const app = express();


let numberOfRequestForUser = {};
setInterval(function(){
  numberOfRequestForUser = {};
},1000);


app.use(function(req,res,next){
  const userId = req.headers["user-id"];

  if(numberOfRequestForUser[userId]){
    numberOfRequestForUser[userId] = numberOfRequestForUser[userId]+1;
    if(numberOfRequestForUser[userId]>5){
      res.status(404).send("no entry");
    }else{
      next();
    }
  }else{
    numberOfRequestForUser[userId]=1;
    next();
  }
})




app.get('/user', function(req, res){
  res.status(200).send("user 1");
})



app.listen(3000);