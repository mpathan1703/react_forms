import React, { useState } from 'react'

export default function Form() {
 
// Hooks 
// all hooks start with use keyword 
// state

let  [values, setValues] =useState({firstname:"" , lastname:""})
const [data, setData] = useState({firstname:"", lastname:""})
// creating a function to get  onChange value from input elements
function onChange(e){
setValues({...values,[e.target.name]:e.target.values})
}
// creating a afunction 

function onSubmit (e){
e.preventDefault()
setData(values)
}

return (
   <>
    <h1 style={{color:"white",background:"#35354E",textAlign:"center",padding:"5PX"}}>Prescription Refiel  Form</h1>
 <div style={{height:"100%",border:"solid black 3px", width:"40%"}}>

 <form onSubmit={onSubmit} style={{marginLeft:"20px ",  fontWeight:"bold",color:"#35354E"}} >
    <label htmlFor="firstname" style={{marginTop:"15px"}}>Enter First Name :-</label>

    <input type="text" onChange={onChange}/>
    <br />
    <label htmlFor="lastname" > Enter Last Name here :-</label>
   
    <input type="text" style={{marginTop:"15px"}}/> <br />
<label htmlFor="mobile numbere" style={{marginTop:"15px"}}>Please Enter your Mobie Number here :- </label>

<input type="number" required style={{marginTop:"15px"}}/><br/>
<label htmlFor="Email" style={{marginTop:"15px"}}>Email :- </label>

<input type="email" style={{marginTop:"15px"}}required/>
<br/>

<label htmlFor="gender" className='gender'style={{marginRight:"15px",marginTop:"15px"}} >Gender:-</label>
<input type='checkbox' name='gender'/>Male
<input type='checkbox' name='gender'/>Female
<input type='checkbox' name='gender'/>Other
<br />
<br/>
<label htmlFor="date of birth"  >
    Date of Birth 
</label>
<input type="date" style={{marginLeft:"10px"}} /><br />
<br />
<label htmlFor="adress">Address</label>
<input type="text" style={{marginRight:"15px"}} /><br />

<button style={{margin:"5px 5px", background:"#35354E", color:"white"}}>submit</button>

 </form>
 </div>
   
   <span>first name is = {data.firstname}</span>
   <br />
   <span>last name is = {data.lastname}</span>

   
   
   
   
   
   
   
   
   </>
  )
}
