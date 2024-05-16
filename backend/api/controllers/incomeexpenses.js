const Income = require('../../models/income'); 
const Expenses = require('../../models/expenses'); 

exports.incomeexpense = async (req, res, next) => {
    try {
        const userId=req.user.userId;
        console.log(userId);
        const [incomes, expenses] = await Promise.all([
            Income.find({ userId: userId }).select("name amount category"), 
            Expenses.find({ userId: userId }).select("name amount category") 
        ]);

        res.status(200).json({ status: true, incomes: incomes, expenses: expenses });
    } catch (error) {
        res.status(401).json({ status: false, message: "Failed to Fetch" });
    }
}
