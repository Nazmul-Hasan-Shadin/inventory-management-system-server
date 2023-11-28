const jwt= require('jsonwebtoken')
const verifyToken=async(req,res,next)=>{
     console.log('iam security',req.headers.authorization);

  if (!req.headers.authorization) {
    return res.status(401).send({message: 'unauthorized access'})
  }


  const token =req.headers.authorization.split(' ')[1]
if (!token) {
  return res.status(401).send({message: 'unauthorized access'})
}

jwt.verify(token,process.env.SECRET_TOKEN,(err,decoded)=>{
 
 if (err) {
  return res.status(401).send({message: 'forbidden access'})
 }

 req.decoded=decoded
 next()   })






}



module.exports=verifyToken