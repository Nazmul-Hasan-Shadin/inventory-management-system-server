
require('dotenv').config()
const http=require('http')
const app= require('./src/app')
const connectToDatabase = require('./src/db/connectDb')

const server= http.createServer(app)
const port= process.env.PORT || 5001

   connectToDatabase()






server.listen(port,()=>{
    console.log('server is listening on ',port);
  })