const express = require('express')

const app = express();


const todos=[];


app.get('/',function(req, res){
  res.json(todos);
})


app.post('/create',function(req, res){
  console.log(req.id);
  todos.push({
    "id": req.id,
    "title": req.title
  })
  res.send("data save");
})
app.get('/delete',function(req, res){

})



app.listen(3000);