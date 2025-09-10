const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();



app.get('/files/:fileName', function(req,res){
  const fileName = req.params.fileName;
  console.log(fileName);
  
  if(fileName){
    fs.readFile(`./file/${fileName}`,'utf-8', function(err, data){
      if(err){
        res.json({msg: "file not found!"})
      }else{
        res.json({data})
      }
    })
  }else{
    fs.readdir(path.join(__dirname, "/file/"),function(err, data){
      res.json({data});
    })
  }

})

app.listen(3000);