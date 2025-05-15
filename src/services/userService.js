const UserDummy = require("../model/user_dummy.model");

const login = async (reqBody) => {
  const { email, fullname, googleId } = reqBody;

  if (!email || !fullname || !googleId) {
    throw new Error("All fields (email, fullname, googleId) are required.", {
      cause: { status: 400 },
    });
  }

  // Check if the user already exists
  const existingUser = await UserDummy.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists. Please log in instead.", {
      cause: { status: 409 }, // 409 Conflict
    });
  }

  // Create a new user if not exists
  const user = await UserDummy.create({
    username: fullname,
    email,
    googleId,
  });

  // Return the new user data
  return {
    _id: user._id,
    username: user.username,
    email: user.email,
  };
};

module.exports = {
  login,
};
