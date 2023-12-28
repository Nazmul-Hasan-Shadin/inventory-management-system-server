const UsersShop = require("../../model/usersShop")

const shopInfo=async(req,res)=>{
    const result= await UsersShop.find().sort({createdAt:1})
     res.json({data:result})
}
module.exports=shopInfo
