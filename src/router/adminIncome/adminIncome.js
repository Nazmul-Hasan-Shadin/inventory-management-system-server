
const express=require('express')
const income = require('../../api/adminIncome/income')
const totalIncomeOfAdmin = require('../../api/adminIncome/totalIncome')
 const router= express.Router()

 router.patch(`/adminIncome`,income)
 router.get(`/totalIncomeOfAdmin`,totalIncomeOfAdmin)

 module.exports=router