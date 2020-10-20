const express=require('express')
const app=express()
const PORT=process.env.PORT||5000
const mongoose=require('mongoose')
const {MONGOURI}=require('./keys')
require('./models/users')
require('./models/form')
app.use(express.json())
app.use(require('./routes/auth'))


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to database atlas ")
})

mongoose.connection.on("error",()=>{
  console.log("error while connecting to database atlas")
})


app.listen(PORT,()=>{
    console.log(`server has started at port ${PORT}`)
})
