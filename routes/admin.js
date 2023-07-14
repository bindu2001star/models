const path=require('path');
const express=require('express');
const bodyparser=require('body-parser');

const router=express.Router();
const fs=require('fs');
router.use(bodyparser.urlencoded({extended:false}));


router.get('/add-product',(req,res,next)=>{
    //console.log("i am in the another123middleware");


    res.sendFile(path.join(__dirname,'../','views','product.html'));
    
});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
});
module.exports=router;