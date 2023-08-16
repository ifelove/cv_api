const mongoose = require("mongoose");
const validator = require("validator");
const ResumeSchema = new mongoose.Schema({
  firstname: { type: String },
  othername: { type: String },
  surname: { type: String },
  profSummary: { type: String },
  phoneNo: { type: Number },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      msg: "Email is Invalid",
    },
  },
  education:{type : [String]}
});

module.exports = mongoose.model("Resume", ResumeSchema);
