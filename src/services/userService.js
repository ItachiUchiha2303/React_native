const UserDummy = require("../model/user_dummy.model");

const login = async (reqBody) => {
  const { email, fullname, googleId } = reqBody;

  if (!email || !fullname || !googleId) {
    const error = new Error(
      "All fields (email, fullname, googleId) are required."
    );
    error.statusCode = 400;
    throw error;
  }

  const existingUser = await UserDummy.findOne({ email });

  if (existingUser) {
    const error = new Error("User already exists. Please log in instead.");
    error.statusCode = 409;
    throw error;
  }

  const user = await UserDummy.create({
    username: fullname,
    email,
    googleId,
  });

  return {
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  };
};

const updateUserData = async (userId, updateData) => {
  const updatedUser = await UserDummy.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  });

  if (!updatedUser) {
    const error = new Error("User not found.");
    error.statusCode = 404;
    throw error;
  }

  return {
    _id: updatedUser._id,
    username: updatedUser.username,
    role: updatedUser.role,
    email: updatedUser.email,
  };
};

module.exports = {
  login,
  updateUserData,
};
