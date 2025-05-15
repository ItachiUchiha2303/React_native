const { Router } = require("express");
const { userLogin, updateUserData } = require("../controllers/userController");
const { authenticateToken } = require("../middleware/authToken");
const router = Router();

router.post("/login", userLogin);
router.put("/update", authenticateToken, updateUserData);
module.exports = router;
