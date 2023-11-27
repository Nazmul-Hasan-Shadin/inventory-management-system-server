
const express=require('express')
const income = require('../../api/adminIncome/income')
 const router= express.Router()

 router.patch(`/adminIncome`,income)

 module.exports=router