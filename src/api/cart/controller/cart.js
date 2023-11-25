const cartModel = require("../../../model/cardMod");


const cart=async(req,res)=>{
    try {
        const cartInfo= req.body;
        const result=await cartModel.create(cartInfo)
        res.json({success:true,data:result})
    } catch (error) {
        console.log(error)
    }
}

module.exports=cart