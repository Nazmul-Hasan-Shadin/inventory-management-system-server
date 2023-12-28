const UsersShop = require("../../../model/usersShop")

const userShop=async(req,res)=>{
  let shopInfo=req.body;
  console.log(shopInfo,'iam info');
    try {
      if (shopInfo) {
        const findShop= await UsersShop.findOne({email:shopInfo.email})
         if (!findShop) {
  
          shopInfo.productLimit=3
          shopInfo.roll='manager'
           console.log(shopInfo);
          const result=await UsersShop.create(shopInfo)
          console.log(result);
         return  res.json(result)
         }

        res.status(404).json({error:'shop already exist'})

         
      }
    
    } catch (error) {
       res.json({error:error.message})
    }
  }

  module.exports=userShop