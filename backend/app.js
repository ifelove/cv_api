const express=require("express")
const app=express()

require("dotenv").config()
const notFound=require("./middleware/notFound")
const errorHandler=require("./middleware/errorHandler")
const port=process.env.PORT || 5000
const authRoute=require("./routes/authRouter")
const userRoute=require('./routes/userRoute')



app.use(express.json())




app.get("/",(req,res)=>{
    res.send("<h1> Converting CV<h1>")
})

app.use("/api/v1/auth",authRoute)
app.use("/api/v1/users/",userRoute)


app.use(notFound);
app.use(errorHandler)






app.listen(process.env.PORT,()=>{console.log(`server listening on port ${port}`)})
