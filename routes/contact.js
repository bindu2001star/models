const path=require('path');
const contactcontrollers=require('../controllers/product')
const express=require('express');
const router=express.Router();
router.use('/contactus',contactcontrollers.contact);
module.exports=router;