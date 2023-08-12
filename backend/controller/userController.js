const User = require("../model/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/indexError");
const {
  createTokenUser,
  attachCookiesToResponse,
  checkPermisions,
} = require("../JWT");

//showing current user
const showCurrentUser = (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};
//getting all the users
const getAllUsers = async (req, res) => {
  const users = await User.find({ role: "user" }).select("-password");
  res.status(StatusCodes.OK).json({ users });
};
//getting single user
const getSingleUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id }).select("-password");
  if (!user) {
    throw new NotFoundError("user not found ");
  }
  checkPermisions(req.user, user._id);
  res.status(StatusCodes.OK).json("user");
};

//updating user
const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const id = req.user.userId;
  if (!email || !name) {
    throw new BadRequestError("Please enter name and email");
  }
  const user = await User.findOne({ _id: id });
  user.email = email;
  user.name = name;

  await user.save();
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ user: tokenUser });
};

//updating user password
const updateUserPassword = async(req, res) => {
  const { oldPassword, newPassword } = req.body;
  const id=req.user.userId
  if (!oldPassword || !newPassword) {
    throw new BadRequestError(
      "Please provide the old password and new password"
    );
  }
  if (oldPassword === newPassword) {
    throw new BadRequestError(
      "Tne new password must be different from the old password"
    );
  }
const user=await User.findOne({_id:id})
if(!user){throw new BadRequestError("user not found")}
//checking if the old password is correct

user.password=newPassword

  res.json("updating user password");
};
const deleteUser = (req, res) => {
  res.json("deletinguser");
};

module.exports = {
  showCurrentUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  updateUserPassword,
  deleteUser,
};
