const mongoose = require("mongoose");
const ResumeSchema = new mongoose.Schema({
  firstname: { type: String },
  othername: { type: String },
  surname:{type:String},
  profSummary:{type:String},
  phoneNo:{type:String},
  email:{}
});

module.exports = mongoose.model("Resume", ResumeSchema);
