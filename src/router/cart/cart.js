const express= require('express')
const cartModel = require('../../model/cardMod')
const cart = require('../../api/cart/controller/cart')
const router = express.Router()

router.post('/admin/cart',cart)

module.exports=router