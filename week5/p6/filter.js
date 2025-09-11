
const arr = [1,2,3,4,5,6];

// const newArr = [];

// for(let i = 0;i<arr.length;i++){
//   if(arr[i]%2==0){
//     newArr.push(arr[i]);

//   }
// }

// console.log(newArr);


const arr2 = ["harkirat", "raman", "parsh", "raushan"]

function filterLogic (n) {
  if(n%2==0){
    return true;
  }else 
  {
    return false;
  }
}

const ans =  arr2.filter((n)=>{
  if(n.startsWith("r")){
    return true;
  }else{
    return false;
  }
});
console.log(ans);
