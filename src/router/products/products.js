const express= require('express')
const products = require('../../api/products/products')
const totalProduct = require('../../api/products/totalproducts')
const router= express.Router()



router.post('/admin/products',products)

router.get('/manager/products-count/:email',totalProduct)

module.exports=router