const express= require('express')
const products = require('../../api/products/products')
const totalProduct = require('../../api/products/totalproducts')
const allproducts = require('../../api/products/allProducts')
const productById = require('../../api/products/productById')
const updateProduct = require('../../api/products/updateProduct')
const deleteProduct = require('../../api/products/deleteProduct')
const updateQuantity = require('../../api/products/updateQuantity')
const salesCollection = require('../../api/products/salesCollection')
const sysallproducts = require('../../api/products/sysallProduct')
const productCount = require('../../api/products/productsCount')
const verifyToken = require('../../api/createToken/verifyToken')
const findProductByEmail = require('../../api/products/findProductByEmail')
const searchProduct = require('../../api/products/searchProduct')
const router= express.Router()



router.post('/admin/products',products)

router.get('/manager/products-count/:email',totalProduct)

router.get('/admin/products/:email',verifyToken,allproducts)
router.get('/sysadmin/products',verifyToken, sysallproducts)
router.get('/admin/products-id/:id', productById )
router.put('/admin/product/update/:id',updateProduct)

router.delete('/admin/product/:id',deleteProduct)

router.patch('/updateQuantity/:cartId',verifyToken,updateQuantity)
router.get('/sales-collection/:email',verifyToken ,salesCollection)

router.get('/productCount',productCount)
router.get('/productCountByEmail/:email',findProductByEmail)
router.get('/productSearch',searchProduct)
module.exports=router