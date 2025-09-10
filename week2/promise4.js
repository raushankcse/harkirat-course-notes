// promsified version of read file
const fs = require("fs");




function readTheFile(finalValue){
  fs.readFile('week2/a.txt', 'utf-8',function(err, data){
    const value = data.split(" ");
    finalValue(value);
  })
}




function readFile(){
  return new Promise(readTheFile);
}


const p = readFile();


function callback(contents){
  console.log(contents);
  
}
p.then(callback);


