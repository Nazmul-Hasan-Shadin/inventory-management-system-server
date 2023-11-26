const express = require("express");
const insertpaymentInfo = require("../../api/payment/insertpayment");

const stripe = require("stripe")('sk_test_51OBuOPEkmX02Z923QncbZZVIQHGnZG8a0tMiHVXqTJWwX02BRas7TY3WbjtbwYNiP26t7YrqOfDb6ht7ypteP3NL00CaZy0EnI');

const router = express.Router()
// This is your test secret API key.

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { price } = req.body;
    console.log(price);



    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(price * 100),
      currency: "usd",
      payment_method_types: ['card']
    });

   
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error.message);
    res.status(500).send({ error: "Error creating payment intent" });
  }
});

router.post('/paymentInfo',insertpaymentInfo)


module.exports=router