const managerProducts = require("../../model/product")

const allproducts=async(req,res)=>{

    const query= {email:req.params.email}

   try {
    if (query) {
        const result= await managerProducts.find(query)
        // in console i found all product bunt in client side console i see only empty product
        console.log(result);
         res.json({product:result})
    }
   } catch (error) {
     
   }
  
}
module.exports=allproducts