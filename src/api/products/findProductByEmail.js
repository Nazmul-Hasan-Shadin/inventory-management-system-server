const managerProducts = require("../../model/product")

const findProductByEmail=async(req,res)=>{
    const query={email:req.params.email}
    console.log(query);
      try {
        if (query) {
            const result=await managerProducts.estimatedDocumentCount(query)
            res.json({count:result,success:true})
        }
      } catch (error) {
        
      }
}

module.exports=findProductByEmail