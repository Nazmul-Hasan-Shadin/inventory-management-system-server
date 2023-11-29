const express= require('express')
const userShop = require('../../api/userShop/controllers/usershop')
const shopInfo = require('../../api/shop/shopInfo')
const limitUpdater = require('../../api/shop/productLimitUpdate')
const productLimitUpdater = require('../../api/shop/productLimitUpdate')
const verifyToken = require('../../api/createToken/verifyToken')
const shopLogo = require('../../api/shop/shopLogo')
// const limitUpdater = require('../../api/shop/productLimitUpdate')

const router=express.Router()



router.post('/user-shop',userShop)
router.get('/user-shop',verifyToken,shopInfo)
router.patch('/productLimit/:email',productLimitUpdater),
router.get('/shopLogo/:email',shopLogo)


module.exports=router