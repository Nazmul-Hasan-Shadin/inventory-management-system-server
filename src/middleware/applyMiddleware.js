
const express=require('express')
const cors= require('cors')
// var cookieParser = require('cookie-parser')


const applyMiddleware=(app)=>{
app.use(cors({
    // origin:'http://localhost:5173',
    origin:'https://inventory-management-system7.web.app',
   credentials:true,

  

    
    
    
}))



// app.use(cookieParser())

app.use(express.json())



}




module.exports=applyMiddleware

