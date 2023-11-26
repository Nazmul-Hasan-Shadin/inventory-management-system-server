const express= require('express')
const cartModel = require('../../model/cardMod')
const cart = require('../../api/cart/controller/cart')
const allcart = require('../../api/cart/controller/allcart')
const router = express.Router()

router.post('/admin/cart',cart)
router.get('/admin/cart/:email',allcart)

module.exports=router