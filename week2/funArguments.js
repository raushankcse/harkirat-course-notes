function sum(a,b){
  return a+b;
}


function doOperation(a, b, fn){
  return fn(a,b);
}

console.log(doOperation(2,3, sum));