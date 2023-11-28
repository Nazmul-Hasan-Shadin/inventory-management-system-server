const cartModel = require("../../../model/cardMod");

const deleteCart = async (req, res) => {
    const query = { email: req.params.email };

    try {
        const result = await cartModel.deleteMany(query);
        console.log(result,'ddelete succestfl');
        res.json({ success: true, data: result });
    } catch (error) {
        console.error("Error deleting carts:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};
module.exports=deleteCart