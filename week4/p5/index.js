const express = require("express");
const app = express();

let request = 0;

app.use(function(req,res,next){
  request++;
  next();
})


app.get('/user', function(req, res){
  res.json("user reqeust");
})


app.get('/request-count', function(req, res){
  res.json({request})
})

app.listen(3000);