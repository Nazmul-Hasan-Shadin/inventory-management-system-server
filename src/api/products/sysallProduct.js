const managerProducts = require("../../model/product")

const sysallproducts=async(req,res)=>{

     console.log('heat');

   try {
   
        const result= await managerProducts.find()
 
  
         res.json({product:result})
   
   } catch (error) {
     
   }
  
}
module.exports=sysallproducts