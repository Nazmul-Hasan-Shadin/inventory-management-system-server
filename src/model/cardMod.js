const { Schema, default: mongoose } = require("mongoose");

const cartSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    sellingPrice: {
        type:Number,

    } ,
    cartId:{
       type:String
    }
})

const cartModel= mongoose.model('carts',cartSchema)
module.exports=cartModel