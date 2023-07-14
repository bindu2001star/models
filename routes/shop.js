const path=require('path');
const express=require('express');
const router=express.Router();

router.use('/',(req,res,next)=>{
    console.log("i am in the another middleware");
    
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
});
module.exports=router;