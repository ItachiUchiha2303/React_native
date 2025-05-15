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

  // ✅ Check if the user already exists by Google ID or Email
  let user = await UserDummy.findOne({ email });

  if (user) {
    // ✅ If user exists, verify the googleId matches
    if (user.googleId !== googleId) {
      const error = new Error("Google account mismatch.");
      error.statusCode = 401;
      throw error;
    }

    // ✅ Return existing user for login
    return {
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    };
  }

  // ✅ If user does not exist, create one
  user = await UserDummy.create({
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
