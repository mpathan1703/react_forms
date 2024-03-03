import React from 'react'

export default function Formdata({data,name}) {
  return (
   <>
 
   <h1>Form Data</h1>
   <div style={{height:"100%", width:"40%",border:"2px solid #35354E",padding:"10PX 10px", marginBottom:"20px"}}> 
<span  style={{color:"#35354E",fontWeight:"bold"}}>First Name  = {data.firstname}</span>

<br />
<span style={{color:"#35354E",fontWeight:"bold"}}>Last Name= {data.lastname}</span>
<br />
<span  style={{color:"#35354E",fontWeight:"bold"}}>Mobile Number ={data.mobilenumber}</span>
<br />
<span  style={{color:"#35354E",fontWeight:"bold"}}>Email = {data.email}
</span>
<br />
<span  style={{color:"#35354E",fontWeight:"bold"}}> Date of Birth = {data.dateOfBirth}
</span>
<br />
<span  style={{color:"#35354E",fontWeight:"bold"}}> Address= {data.address}
</span>
<br />










   </div>
   
   
   </>
  )
}
