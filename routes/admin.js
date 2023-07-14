
const express=require('express');
const bodyparser=require('body-parser');
const productscontroller=require('../controllers/product');

const router=express.Router();

router.use(bodyparser.urlencoded({extended:false}));


router.get('/add-product',productscontroller.getaddproduct);
router.post('/add-product',productscontroller.postaddproduct);
module.exports=router;