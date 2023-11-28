const SaleCollection = require("../../model/paymentschema");

const salesCollection = async (req, res) => {
    const query = req.params.email;

    try {
        const result = await SaleCollection.find({ email: query }).populate({
            path: 'cartId',
            model: 'products', 
            select: 'name', 
            
        });

        console.log(result, 'pop');
        res.json({ success: true, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = salesCollection;
