const express=require('express')
const postUser = require("../../api/User/controllers/user")
const UsersData = require("../../model/users")
const findShopUser = require('../../api/User/controllers/findshopUser')
const getAllRegisterdUser = require('../../api/User/controllers/getallRegisterdUser')
const verifyToken = require('../../api/createToken/verifyToken')
const router=express.Router()


router.post('/users',verifyToken, postUser)
router.get('/users',verifyToken,getAllRegisterdUser)
 
router.get('/users/:email',findShopUser)




module.exports=router