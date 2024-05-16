const incomeSchema=require('../../models/income');
exports.addincome=async(req,res,next)=>{
    try {
        const userId=req.userData.userId;
        const {name,amount,category,date,description}=req.body;
        const newIncome=new incomeSchema({
            userId:userId,
            name:name,
            amount:amount,
            category:category,
            date:date,
        })
        if(description) newIncome.description=description;
        const savedIncome=await newIncome.save();
        res.status(201).json({
            status:true,
            message:"Income Successfully Added",
            savedIncome,
        })
    } catch (error) {
        res.status(401).json({status:false,message:"Failed to Add"});
    }
}

exports.getallincome=async(req,res,next)=>{
        try {
            const userId=req.userData.userId;
            const income=await incomeSchema.find({userId:userId})
            res.status(200).json({
                status:true,
                message:"Successfully Fetched",
                income
            })
        } catch (error) {
            res.status(401).json({status:false,message:"Failed to fetch"})
        }
}