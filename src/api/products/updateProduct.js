const { default: mongoose } = require("mongoose");
const managerProducts = require("../../model/product");


const updateProduct=async(req,res)=>{
    
    try {
        const pd= req.body;
         
         const updateDocument= {
           
            $set:{}
        }

            const fieldsToUpdate = [
                'cost',
                'desc',
                'discount',
                'image',
                'location',
                'name',
                'quantity',
                'profit',
                'email',
                'sellingPrice',
                'buyPrice'
            ]
            fieldsToUpdate.forEach(field => {
                if (pd[field] !== undefined && pd[field] !== null && pd[field] !== "" ) {
                    updateDocument.$set[field] = pd[field];
                }
            });

            const id={_id: new mongoose.Types.ObjectId(req.params.id)}
   
            const result= await managerProducts.updateOne(id,updateDocument)
       
            res.json({success:true, data:result,message:'Product Updated Succesfully'})
        

         }

       

      
    catch (error) {
        console.log(error);
    }
}

module.exports=updateProduct