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
       
    },
    roll:{
        type:String
       
    },
    income: {
        type: Number,  

    }
})

const UsersData= mongoose.model('usersData',usersModal)

module.exports=UsersData