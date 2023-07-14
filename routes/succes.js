const express=require('express');
const router=express.Router();
router.post('/success',(req,res,next)=>{
    console.log("sucess")
    res.write('<h1>Form successfuly filled</h1>');
})
module.exports=router;