import { useEffect, useState } from "react"


function App() {

  const [render, setRender] = useState(false);


  return <div>


  {render ? <Counter></Counter>: null}

  <button onClick={()=>{setRender(!render)}}> change render</button>


  </div>
}


function Counter(){

  const [count, setCount] = useState(0);



  useEffect(function(){
    console.log("hello");
    
    return function(){
      console.log("hii");
      
    }
  },[])


  

  return <div>
    Counter!{count}
    <button onClick={()=>{setCount(count+1)}}>Count</button>
  </div>
}


export default App
