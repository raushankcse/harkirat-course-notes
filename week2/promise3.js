function main(mainresolvoe){
  console.log(mainresolvoe);
  console.log("heelo");
  mainresolvoe();
  
}

function toResolve(){
  console.log("resolving");
  
}


let p = new Promise(main);
console.log(p);


p.then(toResolve);

