const managerProducts = require("../../model/product")

const productCount=async(req,res)=>{
    const result= await managerProducts.countDocuments()
    res.json({count:result})
}

module.exports= productCount