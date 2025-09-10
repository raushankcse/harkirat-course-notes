const express = require("express");

const app = express();

let errorCount = 0;


app.get('/user', function(req, res){
  throw new Error("error")
  res.send("user ");
})

app.get('/error', function(req, res){
  res.json({errorCount})
})

app.use(function(err, req, res, next){
  res.status(400).send({msg: "error"})
  errorCount++;
});


app.listen(3000);