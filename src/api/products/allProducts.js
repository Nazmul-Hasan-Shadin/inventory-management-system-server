const managerProducts = require("../../model/product")

const allproducts=async(req,res)=>{

    const query= {email:req.params.email}

   try {
    if (query) {
        const result= await managerProducts.find(query)
 
  
         res.json({product:result})
    }
   } catch (error) {
     
   }
  
}
module.exports=allproducts