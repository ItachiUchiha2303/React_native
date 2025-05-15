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

const updateProfile = async (req, res) => {
  try {
    const userId = req.user || req.params.id;

    const updateData = req.body;

    // If file is uploaded, add the Cloudinary image URL
    if (req.file && req.file.path) {
      updateData.profile = req.file.path; // Cloudinary URL
    }

    const updatedUser = await userService.updateProfile(userId, updateData);

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    catchAsync(error, res);
  }
};

module.exports = {
  userLogin,
  updateUserData,
  updateProfile,
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
