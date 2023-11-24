const express=require('express')
const postUser = require("../../api/User/controllers/user")
const UsersData = require("../../model/users")
const findShopUser = require('../../api/User/controllers/findshopUser')
const router=express.Router()


router.post('/users',postUser)
 
router.get('/users/:email',findShopUser)




module.exports=router