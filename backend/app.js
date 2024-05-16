const express=require('express');
const  morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose')
const app=express();

require('dotenv').config();

//routes
const userRouter=require('./api/routes/userManagement/auth')
const incomeRouter=require('./api/routes/Income/addincome')
const expensesRouter=require('./api/routes/Expenses/addexpenses')
const authRoute=require('./api/routes/check-auth')
const incomeexpenseRoute=require('./api/routes/incomeexpenses')

app.use(morgan('dev'));
//db connection
mongoose.connect(process.env.ConnectionString).then(() => {
    console.log('Connected to Database')
})
.catch((err) => console.log(err))
mongoose.Promise = global.Promise;


// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (replace with specific domains in production)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Specify allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Specify allowed headers
    next();
});

// parsing the body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Settng Routes
app.use('/api/user/auth',userRouter);
app.use('/api/income',incomeRouter);
app.use('/api/expenses',expensesRouter);
app.use('/api/checkauth',authRoute);
app.use('/api/incomeexpense',incomeexpenseRoute)


//Error Hadling

// if no paths matched
app.use((req, res, next) => {
    const error = new Error('No matching paths')
    error.status = 404;
    next(error);
})

// if methods not matched

app.use((error, req, res, next) => {
    res.status(error.status || 500)[
        res.json({
            error: {
                message: error.message,
            }
        })
    ]
})

module.exports = app;