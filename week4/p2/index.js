const express = require("express");

const app = express();

const user = [{
  name: "John",
  kidneys: [{
    healthy: false
  }]
}];

app.use(express.json());


app.get('/', function(req, res){
  numberOfKidneys = user[0].kidneys.length;
  numberOfHealthyKidneys=0;
  for(let i =0;i<numberOfKidneys;i++){
    if(user[0].kidneys[i].healthy){
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  })
})



app.post('/', function(req, res){
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy:isHealthy
  })
  res.status(200).json({msg:"done!"})
})




app.listen(3000)


