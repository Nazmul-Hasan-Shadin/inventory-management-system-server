const SaleCollection = require("../../model/paymentschema")


const insertpaymentInfo=async(req,res)=>{
   let paymentInfo=req.body
  console.log(paymentInfo);
    
   


    const result= await SaleCollection.create(paymentInfo)

    console.log(result)
    res.send(result)
 }




module.exports=insertpaymentInfo