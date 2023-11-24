const { Schema, default: mongoose } = require("mongoose");

const usersModal= new Schema({
    name:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    photo:{
        type:String
       
    }
})

const UsersData= mongoose.model('usersData',usersModal)

module.exports=UsersData