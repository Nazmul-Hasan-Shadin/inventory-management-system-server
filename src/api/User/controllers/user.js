const UsersData = require("../../../model/users")

const postUser=async(req,res)=>{
  
    const body= req.body

    const query= {email:body.email}
    
    const existUser= await UsersData.findOne(query)

    if (existUser) {
        console.log(existUser,'exxist')
        return res.send('user already exist')
    }
    
    const result = await UsersData.create(body)
    console.log(result)
    res.send(result)
    
    }

  module.exports=postUser  