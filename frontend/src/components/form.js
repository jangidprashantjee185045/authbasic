import React,{useState} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './form.css'
toast.configure()
const Form=()=>{
const  [full_name,setFull_name]=useState('')
const  [father_name,setFather_name]=useState('')
const [email,setEmail]=useState('')
const [cgpa,setCgpa]=useState()
const [age,setAge]=useState()
const PostData=()=>{
    fetch('/form',{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            full_name,
            father_name,
            email,
            cgpa,
            age
        })
    }).then(res=>res.json())
    .then(result=>{
        if(result.error)
        { toast.error(result.error)}
        else
        {toast.info("submitted")
        }
    })
}
 return(
  <div className="form">
      <h2>Shcolarship form</h2>
      <input type="text" className="join-input" placeholder="Full Name"  value={full_name} onChange={(event)=>setFull_name(event.target.value)} />            
             <input type="text" className="join-input" placeholder="Email address" value={father_name} onChange={(event)=>setFather_name(event.target.value)} />            
             <input type="text" className="join-input" placeholder="Father's Name"  value={email} onChange={(event)=>setEmail(event.target.value)} />
             <input type="text" className="join-input" placeholder="CGPA" value={cgpa} onChange={(event)=>setCgpa(event.target.value)} />
             <input type="text" className="join-input" placeholder="Age" value={age} onChange={(event)=>setAge(event.target.value)} />
             <button className="join-input" id="btn" onClick={()=>PostData()} >Submit</button>     
  </div>
 
)}

export default Form
