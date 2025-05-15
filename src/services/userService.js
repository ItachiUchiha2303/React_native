const User = require("../model/User.model");

const login = async (req) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    //   return res.status(401).json({ message: "Invalid email or password" });
    throw new Error("Invalid Email", { cause: { status: 401 } });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch, "dfghjk");
  if (!isMatch) {
    throw new Error("Invalid Password", { cause: { status: 401 } });
  }

  //   const userData = generateToken(user);
  //   const userData = user;
  // res.status(200).json({
  //   _id: user.id,
  //   name: user.name,
  //   email: user.email,
  //   token: generateToken(user.id),
  // });
  return isMatch ? user : "invalid password";
};

module.exports = {
  login,
};
