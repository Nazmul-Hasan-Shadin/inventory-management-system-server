
const express=require('express')
const cors= require('cors')



const applyMiddleware=(app)=>{
app.use(cors({
    origin:'http://localhost:5173',
    // origin:'https://inventory-management-system7.web.app',
    credentials:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH']
    
}))

app.use(express.json())



}




module.exports=applyMiddleware

