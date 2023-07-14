
const express=require('express');
const router=express.Router();
const productscontroller=require('../controllers/product');

router.use('/',productscontroller.shopproducts);
module.exports=router;