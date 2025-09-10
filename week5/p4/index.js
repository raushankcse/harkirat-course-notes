


function sum(hello){
  setTimeout(function(){
    console.log("hii");
    
  }, 3000);
  hello();
}

const promise = new Promise(sum)
  .then(function hii(){
  console.log("hello");
  
})




