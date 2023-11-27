const UsersShop = require("../../model/usersShop");


const productLimitUpdater=async(req,res)=>{
    const {email}=req.params;
    const query= {email:email}     
    const price=req.body.price

  
        const result = await UsersShop.findOne(query);

        if (result) {
         if (price===10) {
            result.productLimit += 200; 
            await result.save();
         }
         if (price===20) {
            result.productLimit += 450; 
        

           
            await result.save();
         }

         if (price===50) {
            result.productLimit += 1500; 
        

           
            await result.save();
         }
  
        }
    
   res.json({success:true,data:result})
}

module.exports=productLimitUpdater