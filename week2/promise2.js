function waitFor3s(resolve){
  setTimeout(resolve, 30000);
}






function promisified(){
  return new Promise(waitFor3s);

}

function main(){
  console.log("hlooooo");
  
}


promisified().then(main);