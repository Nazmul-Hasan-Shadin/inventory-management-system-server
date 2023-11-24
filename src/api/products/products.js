const managerProducts = require("../../model/product")

const products=async(req,res)=>{
   const products=req.body
 
   


    const result= await managerProducts.create(products)

    console.log(result)
    res.send(result)
 }




module.exports=products