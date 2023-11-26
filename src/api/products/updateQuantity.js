const { default: mongoose } = require("mongoose");
const managerProducts = require("../../model/product");

const updateQuantity=async(req,res)=>{
   
    const {cartId}=req.params;
    
    const productIds=cartId.split(',')

    const updatePromises = productIds.map(async (productId) => {
        const result = await managerProducts.findById(productId);

        if (result) {
            // Assuming your product schema has fields quantity and saleCount
            result.quantity -= 1; // Adjust based on your logic
            result.saleCount += 1; // Adjust based on your logic

            // Save the updated product
            await result.save();
        }
    })
   res.json({success:true,data:updatePromises})
}
module.exports=updateQuantity