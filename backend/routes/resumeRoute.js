const express=require("express")
const router=express.Router()

const createResume=require("../controller/resumeController")

router.route("/").post(createResume)


module.exports=router