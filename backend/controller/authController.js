

const register=(req,res)=>{
    res.json("registering new user")
}
const login=(req,res)=>{
     res.json("Login in");
}
const logout=(req,res)=>{
     res.json("logout  user");
}



module.exports={register,login,logout}