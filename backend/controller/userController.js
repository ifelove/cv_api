




const showCurrentUser = (req, res) => {
  res.json("show me");
};
const getAllUsers = (req, res) => {
  res.json("getting all user");
};
const getSingleUser = (req, res) => {
  res.json("getting single user");
};
const updateUser = (req, res) => {
  res.json("updating user");
};
const updateUserPassword = (req, res) => {
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
