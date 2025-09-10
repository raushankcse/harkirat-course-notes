function promisified(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve(){
  await promisified(1000);
  console.log("HIi");
  await promisified(3000);
  console.log("hello");
  await promisified(5000);
  console.log("hi there");
  
  
  
}

solve();