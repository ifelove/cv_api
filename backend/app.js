const express=require("express")
const app=express()
const port=process.env.PORT || 3000



app.get("/",(req,res)=>{
    res.send("<h1> Converting CV<h1>")
})








app.listen(port,()=>{console.log(`server listening on port ${port}`)})
