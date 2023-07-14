const path=require('path');
const express=require('express');
const router=express.Router();
router.use('/contactus',(req,res,next)=>{
    console.log("contact us");
    res.sendFile(path.join(__dirname,'../','views','contact.html'));

})
module.exports=router;