const mongoose = require('mongoose');


const expensesSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'Users',require:true},
    name:{type:String,require:true},
    amount:{type:Number,require:true},
    category:{type:String,require:true},
    description:{type:String,require:false},
    date:{type:Date,default:Date.now}
});

module.exports=mongoose.model('Expenses',expensesSchema);