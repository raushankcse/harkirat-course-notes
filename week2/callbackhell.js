setTimeout(function(){
  console.log("hii");
  setTimeout(function(){
    console.log("hello");
    setTimeout(function(){
      console.log("hi and hello");
      
    },5000)
    
  },3000)
}, 1000)