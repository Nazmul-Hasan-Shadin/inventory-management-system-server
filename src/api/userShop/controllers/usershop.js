const UsersShop = require("../../../model/usersShop")

const userShop=async(req,res)=>{
    let shopInfo=req.body;
    shopInfo.productLimit=3
    shopInfo.roll='manager'
     console.log(shopInfo);
    const result=await UsersShop.create(shopInfo)
    console.log(result);
    res.send(result)
  }

  module.exports=userShop