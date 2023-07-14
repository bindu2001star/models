const express=require('express');
const router=express.Router();
const sucesscontrollers=require('../controllers/product')
router.post('/success',sucesscontrollers.success);
module.exports=router;