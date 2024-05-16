const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1];
        const decode=jwt.verify(token,process.env.secret_key)
        req.userData=decode;
        next();
    } catch (error) {
        return res.status(401).json({
            status:false,
            message:"Not Authorized",
        })
    }
}


