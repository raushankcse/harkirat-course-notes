// checking time taken by setTimeout to excute 


function time(){
  const endTime = performance.now();
  console.log(endTime-startTime);
  console.log("hello");

}

const startTime = performance.now();
setTimeout(time,1*1000);

