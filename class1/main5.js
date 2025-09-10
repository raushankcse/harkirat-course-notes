function arithmetic(a,b,arithmeticSum){
  const ans =   arithmeticSum(a,b);
  return ans;
}



function sum(a,b){
  return a+b;
}

const value = arithmetic(1,2, sum);
console.log(value);