

function App() {


  return (
    <div style={{height:"100vh", width: "100vw", backgroundColor: "#F4F2EE", display: "flex", justifyContent: "center"}}>


      <div style={{display: "flex", flexDirection: "column", gap: "10px" , margin: "10px"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <PostComponent/>
        </div>
        
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <PostComponent/>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <PostComponent/>
        </div>

      </div>

      
      
      </div>

  )
}


function PostComponent(){
  return<div style={{width: 250, backgroundColor: "white", borderRadius: 30, padding: 2}}>

    <div style={{display: "flex", flexDirection: "row", gap: 5 }}>
      <img style={{width:30, borderRadius: "50%",}} src="https://media.licdn.com/dms/image/v2/D5603AQFwxmUUlj1w7A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703677857668?e=1761177600&v=beta&t=yw-UhRVuMiQS4uGzmVOygsHuXLrCNdp6Ld4VBwDyTiM" alt="" />
      <div style={{ display: "flex" , flexDirection: "column"}}>
        <b><span>Raushan Kumar</span></b>
        <span>B.TECH CSE STUDENT</span>
        <span>3h</span>

      </div>
    </div>

    <div>
      <p>Trump asked Modi Ji to send photos from his birthday party. This was the photo sent 👇<br />
           https://lnkd.in/gWRQp8Jb 
      </p>
    </div>
    <img style={{height:100, width: 200}} src="https://media.licdn.com/dms/image/v2/D5622AQFwhWLKDF1Z_g/feedshare-shrink_800/B56ZlX1E4IG4Ag-/0/1758115162838?e=1761177600&v=beta&t=cf_pl-eGJBn_V1tXUGqIhjMybUuvn_Wu471AiuB437o" alt="" />

  </div>
}


export default App
