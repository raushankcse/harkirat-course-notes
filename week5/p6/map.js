

const input = [1,2,3,4,5];

// const newArray = [];

// newArray.push(8);


 
// for(let i = 0;i<input.length;i++){
//   newArray.push(input[i]*2);
// }


// console.log(newArray);



// other 


// const ans = input.map((i)=>{
//   return i*2;
// })

// console.log(ans);




const  map = (input, transform)=>{
  const ans = [];
  for(let i = 0;i<input.length;i++){
    ans.push(transform(input[i]));
  }
  return ans;

}




transform = (i)=>{
  return i*3;
}



const ans = map(input, transform);
console.log(ans);
