const jwt = require("jsonwebtoken")

const authorization=(req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token , "secretkey",(err,decoded)=>{
            if(decoded){
                req.body.user_id = decoded.USERID
                
                next()
            }else{
                res.send({"msg":"please login"})
            }
        })
       
    }else{
        res.send({"msg":"please login"})
    }
}

module.exports ={authorization}