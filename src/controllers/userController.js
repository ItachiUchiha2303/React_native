const catchAsync = require("../uitiles/catch");
const { generateToken } = require("../middleware/authToken");
const userService = require("../services/userService");

//user Login data
const userLogin = async (req, res) => {
  try {
    const userData = await userService.login(req.body);
    const token = generateToken(userData._id);
    res.status(200).json({
      message: "Login successful",
      token,
      role: userData.role,
    });
  } catch (error) {
    catchAsync(error, res);
  }
};

const updateUserData = async (req, res) => {
  try {
    const userId = req.user || req.params.id;
    const updatedUser = await userService.updateUserData(userId, req.body);

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    catchAsync(error, res); // Uses error.statusCode now
  }
};

module.exports = {
  userLogin,
  updateUserData,
};

// const { login } = require("../services/user.service");

// const loginController = async (req, res, next) => {
//   try {
//     const userData = await login(req.body);
//     res.status(200).json({
//       message: "Login successful",
//       user: userData,
//     });
//   } catch (error) {
//     res.status(error.statusCode || 500).json({
//       message: error.message || "Internal Server Error",
//     });
//   }
// };
