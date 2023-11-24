const express= require('express')
const userShop = require('../../api/userShop/controllers/usershop')
const router=express.Router()



router.post('/user-shop',userShop)


module.exports=router