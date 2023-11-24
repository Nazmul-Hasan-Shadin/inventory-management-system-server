const { Schema, default: mongoose } = require("mongoose");

const usersSchema= new Schema({
    email:{
        type: String,
        required:true
    },
    location:{

        type:String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    shopInfo:{
        type: String,
        required:true
    },
    shopLogo:{
        type: String,
        required:true
    },
    shopName:{
        type: String,
        required:true
    }
})

const UsersShop= mongoose.model('userShop',usersSchema)

module.exports=UsersShop