function findSum(num){
  let ans = 0;
  for(let i=1;i<=num;i++){
    ans = ans + i;
  }
  return ans;
}


console.log(findSum(10));