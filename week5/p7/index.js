// fetch


// function main(){
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(async response =>{
//       const json = await response.json();
      
      
//       json.forEach(element => {
//         console.log(element.id)
//       });
      
//     })
// }

// main();


async function main() {
  const response = await fetch("https://httpdump.app/dumps/ae4d04b5-7ae7-44ed-9ae9-3aa63fc85cda", {
    method: "POST",
    
    headers: {
      "Authorization": "Bearer 123",
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({
      username : 'raushan', 
      password : '1234'
    }),
  })
  // console.log(response);
  
  const data = await response.text();
  console.log(data);

  
  
} 


main();