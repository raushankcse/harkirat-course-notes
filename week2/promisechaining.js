function promisified(ms){
  return new Promise(function(resolve){
    setTimeout(resolve,ms);
  })
}




promisified(1000).then(function(){
  console.log("hii");
  return promisified(3000)
}).then(function(){
  console.log("hello");
  return promisified(5000)
}).then(function(){
  console.log("hello there"); 
});