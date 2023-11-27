const SaleCollection = require("../../model/paymentschema")


const insertpaymentInfo=async(req,res)=>{
   let paymentInfo=req.body
  console.log(paymentInfo);
    
   


    const result= await SaleCollection.create(paymentInfo)
    
    const populatedResult = await SaleCollection.findById(result._id).populate('name');

   
    await SaleCollection.findByIdAndUpdate(result._id, populatedResult);



    res.send(result)
 }




module.exports=insertpaymentInfo