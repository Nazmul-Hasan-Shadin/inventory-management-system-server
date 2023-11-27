const { Schema, default: mongoose } = require("mongoose");
const managerProducts = require("./product");

const ProductMod= new Schema({
    amount:{
        type:Number,
        required:true
    },
    name:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
 
    },
    email:String,
    transictionId:String,
    date: String,
    cartId: Array
    

})

const SaleCollection= mongoose.model('saleCollection',ProductMod)

module.exports=SaleCollection