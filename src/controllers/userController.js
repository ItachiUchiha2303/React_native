const catchAsync = require("../uitiles/catch");
const { generateToken } = require("../middleware/authToken");
const userService = require("../services/userService");

//user Login data
const userLogin = async (req, res) => {
  try {
    const userData = await userService.login(req);
    console.log(userData, "this is ctrl");
    const Data = generateToken(userData);
    res.status(201).json(
      //  token message : "Login Successfully",
      {
        token: Data,
        role: userData.role,
      }
    );
  } catch (error) {
    catchAsync(error, res);
  }
};

module.exports = {
  userLogin,
};
