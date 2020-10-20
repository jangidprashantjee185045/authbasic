import React, {useState} from 'react'
import {toast} from 'react-toastify'
import './signup.css'
toast.configure()
const Signup=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
const Postdata=()=>{
     fetch('/signup',{
         method:"post",
         headers:{
             "Content-Type":"application/json"
         },
         body:JSON.stringify({
             name:name,
             email:email,
             password:password
         })
     }).then(res=>res.json())
     .then(data=>{
         if(data.error){
             toast.error(data.error)
         }else{
             toast.success(data)
         }
     }).catch(error=>{
         console.log(error)
     })
}

    return (
        <div className="signup">
          <h1>Signup</h1> 
        <input type="text" className="join-input" placeholder="Name" value={name} onChange={(event)=>setName(event.target.value)} />            
        <input type="text" className="join-input" placeholder="User ID" value={email} onChange={(event)=>setEmail(event.target.value)} />            
        <input type="password" className="join-input" placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)} />
        <button className="join-input" id="btn" onClick={()=>Postdata()} >Signup</button>
      </div>
    )
}

export default Signup