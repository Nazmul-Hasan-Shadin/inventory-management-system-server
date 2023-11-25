const express = require("express");

const stripe = require("stripe")('sk_test_51OBuOPEkmX02Z923QncbZZVIQHGnZG8a0tMiHVXqTJWwX02BRas7TY3WbjtbwYNiP26t7YrqOfDb6ht7ypteP3NL00CaZy0EnI');

const app = express.Router()
// This is your test secret API key.


router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount:parseInt( price *100),
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    payment_method_types:['card']
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


app.listen(4242, () => console.log("Node server listening on port 4242!"));