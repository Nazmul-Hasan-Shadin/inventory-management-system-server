const UsersShop = require("../../model/usersShop")

const shopLogo=async(req,res)=>{
    const query= {email:req.query.email}
    
    const result=await UsersShop.find(query)
    res.json({data:result})

}

module.exports=shopLogo