const mongoose=require('mongoose')
const formSchema=new mongoose.Schema({
    full_name:{
        type:String,
        required:true
    },
    father_name:{
        type:String,
        required:true,
    }, 
    email:{
        type:String,
        required:true
    },
    cgpa:{
        type:Number,
        required:true  
      },
    age:{
        type:Number,
        required:true
    }
})

mongoose.model("Form",formSchema)
