import { useState } from "react"


function App() {
  return <div>
    <h1>
      Counter app
    </h1>
    <Counter/>


  </div>
}


function Counter(){

  const [count, setCount] = useState(0);

  console.log("inside counter");
  

  // setInterval(function(){
  //   setCount(count+1);
  // }, 1000)


  return <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increase count</button>
    <button onClick={()=>setCount(count-1)}>decrease count</button>
    <button onClick={()=>setCount(0)}>Reset count</button>
  </div>
}


export default App
