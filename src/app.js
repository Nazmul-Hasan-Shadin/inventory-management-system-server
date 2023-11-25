const express= require('express');
const connectToDatabase = require('./db/connectDb');
const applyMiddleware = require('./middleware/applyMiddleware');
require('dotenv').config()

const app=express()
const port= process.env.PORT ||5000;


 const userShopRoute=require('./router/userShop')
 const usersRouter=require('./router/Users')
const product= require('./router/products/products.js')
const cart=require('./router/cart/cart.js')




connectToDatabase()
 
 applyMiddleware(app)

 app.use(userShopRoute)
  app.use(usersRouter)
  app.use(product)

  app.use(cart)










app.get('/health',(req,res)=>{
    res.send('server is running')
})




app.all('*',(req,res,next)=>{
 console.log(req.url);
 const error = new Error(`the requested url is invaild [ ${req.url}]`)
 next(error)
})

 app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        message:err.message
    })
 })


app.listen(port)