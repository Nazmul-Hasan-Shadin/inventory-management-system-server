const express= require('express')
const cartModel = require('../../model/cardMod')
const cart = require('../../api/cart/controller/cart')
const allcart = require('../../api/cart/controller/allcart')
const deleteCart = require('../../api/cart/controller/deleteCart')
const verifyToken = require('../../api/createToken/verifyToken')
const router = express.Router()

router.post('/admin/cart',cart)
router.get('/admin/cart/:email',verifyToken,allcart)
router.delete('/admin/cart/:email',deleteCart)

module.exports=router