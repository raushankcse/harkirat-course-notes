function square(n){
  return n*n;
}

function sumOfSquares(a,b){
  let val1 = square(a);
  let val2 = square(b);

  return val1 + val2;
  
}


let ans = sumOfSquares(1,2);
console.log(ans);