import React,{useState} from 'react'
import {toast} from 'react-toastify'
import './signup.css'
toast.configure()
const Signin=()=>{ 
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const Postdata=()=>{
 fetch('/signin',{
     method:"post",
     headers:{
         "Content-Type":"application/json"
     },
     body:JSON.stringify({
         email:email,
         password:password
     })
 }).then(res=>res.json())
 .then(data=>{
     if(data.error){
         toast.error(data.error)
     }else{
         localStorage.setItem("jwt",data.token)
         toast.success("success fully signed in ")
         console.log(data)
     }
 }).catch(error=>{
     console.log(error)
 })
}
    return (
        <div className="signup">
          <h1>Signin</h1>         
        <input type="text" className="join-input" placeholder="User ID" value={email} onChange={(event)=>setEmail(event.target.value)}/>            
        <input type="password" className="join-input" placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)} />
        <button className="join-input" id="btn" onClick={()=>Postdata()} >Signin</button>
      </div>
    )
}

export default Signin