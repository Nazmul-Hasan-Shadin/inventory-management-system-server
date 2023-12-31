const express= require('express');
const connectToDatabase = require('./db/connectDb');
const applyMiddleware = require('./middleware/applyMiddleware');
require('dotenv').config()

const app=express()
const port= process.env.PORT || 5001;


 const userShopRoute=require('./router/userShop')
 const usersRouter=require('./router/Users')
const product= require('./router/products/products.js')
const cart=require('./router/cart/cart.js')
const payment= require('./router/payment/payment.js')
const adminIncome= require('./router/adminIncome/adminIncome.js')
const authentication= require('./router/authentication/index.js')



 
 applyMiddleware(app)

 app.use(userShopRoute)
  app.use(usersRouter)
  app.use(product)

  app.use(cart)
  app.use(payment)
  app.use(adminIncome)
  app.use(authentication)










app.get('/health',(req,res)=>{
    res.send('server is running')

})




app.all('*', (req, res, next) => {
  console.log(req.url);
  const error = new Error(`The requested URL is invalid [${req.url}]`);
  next(error);
});


 app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        message:err.message
    })
 })






module.exports=app