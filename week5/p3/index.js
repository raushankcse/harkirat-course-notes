const express = require("express")
const app = express()

let jsonMiddleware = express.json();

app.use(jsonMiddleware);

let requestcount= 0;


function middleware(req, res, next){

  const fullUrl = req.protocol + "://" + req.host + req.originalUrl;
  const method = req.method;
  const timestamp = new Date;
  const ipaddress   = req.ip

  console.log("method: " + method);
  console.log("url: " + fullUrl);
  console.log("timestamp: " + timestamp);
  console.log("ipaddress: " + ipaddress);
  

  requestcount++;
  console.log(requestcount);
  
  next();
}


app.use(middleware);



app.post("/add", function(req, res){
  const a = Number(req.body.a);
  const b = Number(req.body.b);
  res.json({
    answer: a+b,
  });
})
app.get("/sub", function(req, res){
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(a-b);
})
app.get("/mul", function(req, res){
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(a*b);
})
app.get("/divide", function(req, res){
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(a/b);
})

app.listen(3000);