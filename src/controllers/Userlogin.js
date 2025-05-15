const User = require("../model/User.model");

const UserLogin = async(req,res) =>{
try {
    const data = req.body;
    if(!data) return res.status(401).json({message:"Bad Request"});
    const create_user = await User.create(data);
    if(!create_user) return res.status(500).json({message:"Server Error"});
    res.status(201).json(create_user,{message:"User created successfully"});
} catch (error) {
    console.log(error.message);
}
}

module.exports = UserLogin;