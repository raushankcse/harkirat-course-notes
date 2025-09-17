import { useEffect, useState } from "react"


function App() {
  return <div>
    <h1>
      Counter app
    </h1>


    <Counter></Counter>


  </div>
}


function Counter(){

  const [count, setCount] = useState(0);

  console.log("inside counter");
  
  useEffect(function(){
    
    setInterval(function(){
      setCount(function(count){
        return count+1;

      })
    }, 1000)
    
  }, []);

  


  return <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increase count</button>
    <button onClick={()=>setCount(count-1)}>decrease count</button>
    <button onClick={()=>setCount(0)}>Reset count</button>
  </div>
}


export default App
