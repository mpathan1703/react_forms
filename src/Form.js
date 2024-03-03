import React, { useState } from 'react'
import Formdata from './Formdata'

export default function Form() {
 
// Hooks 
// all hooks start with use keyword 
// state

const [values, setValues] = useState({firstname:"" , lastname:"",mobilenumber:""})
const [data, setData] = useState({firstname:"", lastname:"",mobilenumber:""})
// creating a function to get  onChange value from input elements
function onChange(ele){
setValues({...values,[ele.target.name]:ele.target.value})
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

    <input type="text" onChange={onChange} id='firstname' name="firstname"/>
   
    <br />
    <label htmlFor="lastname" > Enter Last Name here :-</label>
   
    <input type="text" onChange={onChange}  id="lastname" name="lastname" style={{marginTop:"15px"}}/> 
    <br />
 
<label htmlFor="mobilenumber" id="mobilenumber" name="mobilenumber" onChange={onChange} style={{marginTop:"15px"}}>Please Enter your Mobie Number here :- </label>

<input type="number"  onChange={onChange} id='mobilenumber'required style={{marginTop:"15px"}}/>
<br/>
<label htmlFor="Email" style={{marginTop:"15px"}}>Email :- </label>

<input type="email"  onChange={onChange}  id='email' name='email' style={{marginTop:"15px"}}/>
<br/>

<label htmlFor="gender"  style={{marginRight:"15px",marginTop:"15px"}} >Gender:-</label>
<input type='checkbox' name="gender" />Male
<input type='checkbox'name="gender" />Female
<input type='checkbox'name="gender"  />Other
<br />
<br/>
<label htmlFor="date of birth"  >
    Date of Birth 
</label>
<input type="date" id='dateOfBirth' name="dateOfBirth"  onChange={onChange}style={{marginLeft:"10px"}} /><br />
<br />
<label htmlFor="adress">Address</label>
<input type="text" id='address' onChange={onChange}  name="address" style={{marginRight:"15px"}} /><br />

<button style={{margin:"5px 5px", background:"#35354E", color:"white", border:"12 px solid #35354E"}}>submit</button>

 </form>
 </div>
   
   {/* <span>first name is = {data.firstname}</span>
   <br />
   <span>last name is = {data.lastname}</span>
   <br />
   <span>email is = {data.email}</span>
   <br />
<span>address = {data.address}</span> */}
<br />

   
   
   {/* importing Formdata */}
   <Formdata data={data} />
   
   
   
   
   </>
  )
}
