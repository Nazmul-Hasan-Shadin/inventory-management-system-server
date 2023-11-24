const { Schema, default: mongoose } = require("mongoose");

const ProductMod= new Schema({
    cost:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
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
    location:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
    ,
    profit:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const managerProducts= mongoose.model('products',ProductMod)

module.exports=managerProducts