function setTimeoutPromise(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}


// function callback(){
//   console.log("some time passed like 3 sec");
  
// }


let p = setTimeoutPromise(3000).then(()=>{
  console.log("3 sec passed");
});

console.log(p);
