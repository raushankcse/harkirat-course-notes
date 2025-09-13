// arrow function


function sum(a,b){
  return a+b;
}


const  sum = (a,b) => {
   console.log(a);
}



setTimeout(function(a){
  console.log(a);
  
}, 3000);

setTimeout((a,b)=>{
  console.log(a);
  console.log(b);
  
  
},3000)

const ans = sum(2,3);


console.log(ans); 


app.get("/" , (req, res)=>{
  res.send("hi");
})