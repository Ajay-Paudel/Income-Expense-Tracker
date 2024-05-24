const expensesScheme=require('../../models/expenses');
const userSchema = require("../../models/user")

exports.addexpenses=async(req,res,next)=>{
    try {
        const userId=req.userData.userId;
        const isUserExist=await userSchema.findOne({_id:userId})
        if(!isUserExist) return res.status(400).json({status:false,message:"User Doesn't Exists"})
        const {name,amount,category,date,description}=req.body;
        const newExpenses=new expensesScheme({
            userId:userId,
            name:name,
            amount:amount,
            category:category,
            date:date
        })
        if(description) newExpenses.description=description;
        const savedExpenses=newExpenses.save();
        res.status(201).json({
            status:true,
            message:"Expenses Successfully Added",
            savedExpenses
        })
    } catch (error) {
        res.status(401).json({
            status:false,
            message:"Failed to Add"
        })
    }
}

exports.allexpenses=async(req,res,next)=>{
    try {
        const userId=req.userData.userId;
        const isUserExist=await userSchema.findOne({_id:userId})
        if(!isUserExist) return res.status(400).json({status:false,message:"User Doesn't Exists"})
        const expenses=await expensesScheme.find({userId:userId});
        res.status(200).json({
            status:true,
            message:"Successfully Fetched",
            expenses
        })
    } catch (error) {
        res.status(401).json({
            status:false,
            message:"Failed to fetch"
        })
    }
}