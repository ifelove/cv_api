const mongoose=require("mongoose")
const TemplateSchema=new mongoose.Schema({
    name:{type:String}
})

module.exports=mongoose.model("Template",TemplateSchema)