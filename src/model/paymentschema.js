const { Schema, default: mongoose } = require("mongoose");

const ProductMod= new Schema({
    amount:{
        type:Number,
        required:true
    },
    email:String,
    transictionId:String,
    date: String,
    cartId: Array
    

})

const SaleCollection= mongoose.model('saleCollection',ProductMod)

module.exports=SaleCollection