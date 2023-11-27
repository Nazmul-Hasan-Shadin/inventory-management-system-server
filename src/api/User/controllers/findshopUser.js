const UsersData = require("../../../model/users");
const UsersShop = require("../../../model/usersShop")

const findShopUser=async(req,res)=>{
     const query= {email:req.params.email}
     console.log(query);
   try {
   
    const user= await UsersShop.findOne(query)
    const userInfo= await UsersData.findOne(query)
    let manager=false;
     let sysadmin=false;

// manager check
    if (user) {
        manager=user.roll=='manager'
       
    }
    if (userInfo) {
     sysadmin = userInfo.roll === 'sysadmin';
      console.log(userInfo,'admind');
      console.log(sysadmin);
    }



 
      
      res.send({manager,sysadmin}) 

   } 
   
   catch (error) {
     console.log(error);
   }


}

module.exports=findShopUser