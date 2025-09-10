

function  sumOfSomething(a, b, fn){
  const val1 = fn(a);
  const val2 = fn(b);

  return val1 + val2;
  


}


const ans = sumOfSomething(2, 2, function (n){
  return n*n;
})

console.log(ans);