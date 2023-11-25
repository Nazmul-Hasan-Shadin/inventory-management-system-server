const { default: mongoose } = require("mongoose")
const managerProducts = require("../../model/product")

const deleteProduct=async(req,res)=>{
   try {
    const query=req.params.id
    const id= {_id:new mongoose.Types.ObjectId(query)}
    
    const result=await managerProducts.deleteOne(id)
     res.send(result)
   } catch (error) {
    console.log(error);
   }
}

module.exports=deleteProduct