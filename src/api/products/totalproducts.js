const managerProducts = require("../../model/product");
const UsersShop = require("../../model/usersShop");

const totalProduct = async (req, res, next) => {
  const email = { email: req.params.email };
  try {
    const existProductCount = await managerProducts.countDocuments(email);
    const checkLimit=  await UsersShop.findOne(email)
    
    if (checkLimit.productLimit < existProductCount ) {
      return res.status(403).json({ message: 'You have reached the limit of 3 products. Please make a payment to add more.' });
    }
 
    console.log(existProductCount);
     
    

    // if (existProductCount >= 3) {
    //   return res.status(403).json({ message: 'You have reached the limit of 3 products. Please make a payment to add more.' });
    // }

    return res.send({count:existProductCount})

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = totalProduct;
