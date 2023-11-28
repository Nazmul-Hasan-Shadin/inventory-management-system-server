const jwt= require('jsonwebtoken')
require('dotenv').config()
 
const createToken=async(req,res)=>{
    const userInfo= req.body
    const token= jwt.sign(userInfo,process.env.SECRET_TOKEN,{expiresIn:'8h'})
    res.send({token})
}

module.exports=createToken