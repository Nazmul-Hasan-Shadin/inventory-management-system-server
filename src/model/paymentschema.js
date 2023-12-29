const { Schema, default: mongoose } = require("mongoose");

const ProductMod = new Schema({
    amount: {
        type: Number,
        required: true
    },
    name: {
        type:String
    },
    email: String,
    transictionId: String,
    date: String,
    cartId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products', 
    }]
});

const SaleCollection = mongoose.model('saleCollection', ProductMod);

module.exports = SaleCollection;
