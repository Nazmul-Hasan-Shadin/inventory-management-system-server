const UsersShop = require("../../../model/usersShop")

const findShopUser=async(req,res)=>{
     const query= {email:req.params.email}
     console.log(query);
   try {
   
    const user= await UsersShop.findOne(query)
    let manager=false;

    if (user) {
        manager=user.roll=='manager'
    }

      res.send({manager}) 

   } 
   
   catch (error) {
     console.log(error);
   }


}

module.exports=findShopUser