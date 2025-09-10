const fs = require("fs")


function readTheFile(){
  return new Promise(function(resolve, reject){
    fs.readFile('week2/a.txt','utf-8', function(err, data){
      if(err){
        reject("file not found");
      }else{
        resolve(data);
      }
    })
  })
}


readTheFile().then(function(x){
  console.log("file has be read " + x);
  
}).catch(function(e){
  console.log(e);
  
})