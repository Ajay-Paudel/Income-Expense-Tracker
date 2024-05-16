const express=require('express');
const router=express.Router();
const checkAuth=require('../../middleware/authorization')
const incomeexpenseController=require('../controllers/incomeexpenses')
router.get('/',checkAuth,incomeexpenseController.incomeexpense)

module.exports=router;
