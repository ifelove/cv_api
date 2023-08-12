const express = require("express");
const router = express.Router();
const {authenticateUser,authorizeRoles}=require("../middleware/authentication")

const {
  showCurrentUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  updateUserPassword,
  deleteUser,
} = require("../controller/userController");


router.route("/").get(authenticateUser,authorizeRoles("admin"),getAllUsers)
router.route("/showowner").get(showCurrentUser)
router.route("/updateUser").patch(updateUser)
router.route("/updatePassword").patch(updateUserPassword);

router.route("/:id").delete(authorizeRoles("admin"),deleteUser);
router.route("/:id").get(getSingleUser)


module.exports=router