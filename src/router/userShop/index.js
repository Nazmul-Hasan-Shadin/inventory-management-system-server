const express= require('express')
const userShop = require('../../api/userShop/controllers/usershop')
const shopInfo = require('../../api/shop/shopInfo')
const limitUpdater = require('../../api/shop/productLimitUpdate')
const productLimitUpdater = require('../../api/shop/productLimitUpdate')
const verifyToken = require('../../api/createToken/verifyToken')
// const limitUpdater = require('../../api/shop/productLimitUpdate')

const router=express.Router()



router.post('/user-shop',verifyToken,userShop)
router.get('/user-shop',verifyToken,shopInfo)
router.patch('/productLimit/:email',productLimitUpdater)


module.exports=router