const { Types } = require("mongoose")
const managerProducts = require("../../model/product")

const productById=async(req,res)=>{
   const id=req.params.id
   
    const query={_id:new Types.ObjectId(id)}

     if (query) {
        const result=await managerProducts.findOne(query)
        res.json({product:result})
     }
    
}

module.exports=productById