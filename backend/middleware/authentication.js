const UnauthenticatedError=require("../errors/unauthenticatedError")
const {isTokenValid}=require("../JWT/jwtUtils")

const authenticateUser=(req,res,next)=>{
let token
token=req.cookies.req

}






module.exports=authenticateUser