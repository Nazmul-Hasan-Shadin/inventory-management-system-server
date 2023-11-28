const express= require('express')
const router= express.Router()
const createToken = require("../../api/createToken/CreateToken");
const verifyToken = require('../../api/createToken/verifyToken');


router.post('/jwt',createToken)


module.exports=router