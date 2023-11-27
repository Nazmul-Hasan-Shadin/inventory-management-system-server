const UsersShop = require("../../model/usersShop")

const shopInfo=async(req,res)=>{
    const result= await UsersShop.find()
     res.json({data:result})
}
module.exports=shopInfo