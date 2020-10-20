const express=require('express')
const router=express.Router()
const bcrypt=require('bcryptjs')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../keys')
const User= mongoose.model("User")
const Form=mongoose.model("Form")
const authlogin =require('../middleware/authlogin')


router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body
    if(!name||!email||!password){
        return res.status(422).json({error:"Please fill all the fields"})
          
    }
    else{
        User.findOne({email:email}).then(saveduser=>{
            if(saveduser){
                return res.json({error:"user all ready exists"})
            }
            bcrypt.hash(password,12).then(hashedpassword=>{
                const user =new User({
                    name,email,password:hashedpassword
                })
    
                user.save().then(user=>{
                   
                        return res.json({message:"saved successfully"})
                   
                }).catch(error=>{
                    console.log(error)
                })
            })
           
        }).catch(error=>{
            console.log(error)
        })
    }
    
})

router.post('/signin',(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        return res.json({error:"please fill all the fields"})
    }
    User.findOne({email:email}).then(saveduser=>{
        if(!saveduser){
            return res.json({error:"Invalid username or password"})
        }
        bcrypt.compare(password,saveduser.password)
        .then(domatch=>{
            if(domatch){
                const token=jwt.sign({_id:saveduser._id},JWT_SECRET)
                return  res.json({token})
            }else{
                return res.json({error:"Invalid username or password"})
            }
        })
        .catch(error=>{
            console.log(error)
        })
    })
})

router.post('/form',authlogin,(req,res)=>{
const {full_name,father_name,email,cgpa,age}=req.body
if(!full_name||!father_name||!email||!cgpa||!age){
    return res.json({error:"please fill all the fields"})
}
Form.findOne({email:email}).then(submitted=>{
    if(submitted){
        return res.json({error:"You can only fill with one email"})
    }
    const form=new Form({
        full_name,father_name,email,cgpa,age
    })
   form.save()
   .then(savedform=>{
       res.json({message:"Your response has been submitted"})
   })
   .catch(error=>{
       console.log(error)
   })

})
})

router.get('/allforms',authlogin,(req,res)=>{
    Form.find().then(forms=>{
        res.json({forms})
    }).catch(error=>{
        console.log(error)
    })
})

module.exports=router
