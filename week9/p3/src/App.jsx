import { useState } from "react"


function App() {


  return (
    <div style={{height:"100vh", width: "100vw", backgroundColor: "#F4F2EE", display: "flex", justifyContent: "center"}}>
      
      
      
      <div style={{display: "flex", flexDirection: "column", gap: "10px" , margin: "10px"}}>

        <ToggleMessage/>
        <ToggleMessage/>
        <ToggleMessage/>

        




          {/* <PostComponent
            name={"raushan kumar"}
            title = {"3m followers"}
            time={"3h"}

          />
          <PostComponent
            name={"Linekedin"}
            title = {"Promoted"}

          /> */}




      </div>
      
      </div>

  )
}


const ToggleMessage = () => {
  const [isVisible , setIsVisible] = useState(false);

  return <div>
    <button onClick={()=>{setIsVisible(!isVisible)}}>
      Toggle Message
    </button>
    { isVisible && <p>hello dude</p>}
  </div>
}


















function PostComponent(props){
  return <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
  
  <div style={{width: 250, backgroundColor: "white", borderRadius: 20, padding: 20}}>

    <div style={{display: "flex", flexDirection: "row", gap: 5 }}>
      <img style={{height:"45px", borderRadius: "50%",}} src="https://media.licdn.com/dms/image/v2/D5603AQFwxmUUlj1w7A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703677857668?e=1761177600&v=beta&t=yw-UhRVuMiQS4uGzmVOygsHuXLrCNdp6Ld4VBwDyTiM" alt="" />
      <div style={{ display: "flex" , flexDirection: "column", fontSize:"15px"}}>
        <b><span>{props.name}</span></b>
        <span>{props.title}</span>
        { props.time &&
        <div>
          <span>{props.time}   </span>
          <img style={{width:"10px"}} src="https://www.citypng.com/public/uploads/preview/transparent-hd-clock-black-icon-701751695035247tdyb6pbz50.png" alt="" />
        </div>
      }
      </div>
    </div>

    <div>
      <p>Trump asked Modi Ji to send photos from his birthday party. This was the photo sent 👇<br />
           https://lnkd.in/gWRQp8Jb 
      </p>
    </div>
    <img style={{height:100, width: "100%"}} src="https://media.licdn.com/dms/image/v2/D5622AQFwhWLKDF1Z_g/feedshare-shrink_800/B56ZlX1E4IG4Ag-/0/1758115162838?e=1761177600&v=beta&t=cf_pl-eGJBn_V1tXUGqIhjMybUuvn_Wu471AiuB437o" alt="" />

    </div>
    </div>
}


export default App
