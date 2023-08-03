const express = require("express");
const router = express.Router();

const {
  showCurrentUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  updateUserPassword,
  deleteUser,
} = require("../controller/userController");


router.route("/").get(getAllUsers)
router.route("/showowner").get(showCurrentUser)
router.route("/updateUser").patch(updateUser)
router.route("/updatePassword").patch(updateUserPassword);

router.route("/:id").delete(deleteUser);
router.route("/:id").get(getSingleUser)


module.exports=router