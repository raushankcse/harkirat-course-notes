const axios = require("axios");

async function main(){

  // request config
  // const response = await axios.post("https://httpdump.app/dumps/ae4d04b5-7ae7-44ed-9ae9-3aa63fc85cda",{
  //   username: "raushan", 
  //   password: "123",
  // }, {
  //   headers: {
  //     "Authorization" : "Bearer 123"
  //   }
  // })


  const response = await axios({
    url: "https://httpdump.app/dumps/ae4d04b5-7ae7-44ed-9ae9-3aa63fc85cda",
    method: "POST",
    headers:{
      "Authorization": "Bearer 123"
    },
    data: {
      "username": "raushan",
      "password": "123456"
    }
  })
  console.log(response.data);
  
}

main();