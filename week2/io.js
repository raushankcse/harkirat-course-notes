
const fs = require("fs");

function read(err, data){
  if(err){
    console.log(err);
    
  }else{

    console.log(data);
  }
  
}

const contents = fs.readFile("week2/a.txt", "utf-8", read);    //asynchronously


// console.log("contents");


// const contents1 = fs.readFile("week2/b.txt", "utf-8", read);
