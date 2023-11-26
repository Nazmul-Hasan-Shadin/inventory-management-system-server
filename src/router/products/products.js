const express= require('express')
const products = require('../../api/products/products')
const totalProduct = require('../../api/products/totalproducts')
const allproducts = require('../../api/products/allProducts')
const productById = require('../../api/products/productById')
const updateProduct = require('../../api/products/updateProduct')
const deleteProduct = require('../../api/products/deleteProduct')
const updateQuantity = require('../../api/products/updateQuantity')
const router= express.Router()



router.post('/admin/products',products)

router.get('/manager/products-count/:email',totalProduct)

router.get('/admin/products/:email',allproducts)
router.get('/admin/products-id/:id', productById )
router.put('/admin/product/update/:id',updateProduct)

router.delete('/admin/product/:id',deleteProduct)

router.patch('/updateQuantity/:cartId',updateQuantity)

module.exports=router