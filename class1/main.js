const allUsers = [
  {
    firstName: "raushan",
    gender: "male"
  }, 
  {
    firstName: "ram",
    gender: "male"
  },
  {
    firstName: "Riya",
    gender: "female"
  }
]

for(let i=0;i< allUsers.length;i++){
  if(allUsers[i]["gender"]=="male"){
    console.log(allUsers[i]["firstName"]);
  }
}