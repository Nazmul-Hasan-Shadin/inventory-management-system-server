const cartModel = require("../../../model/cardMod")

const allcart=async(req,res)=>{

  const query={email:req.params.email}

  const result= await cartModel.find(query)
  res.json({success:true,data:result})




}

module.exports=allcart