const { Router } = require("express");
const {
  userLogin,
  updateUserData,
  updateProfile,
} = require("../controllers/userController");
const { authenticateToken } = require("../middleware/authToken");
const upload = require("../middleware/cloudinary");
const router = Router();

router.post("/login", userLogin);
router.put("/update", authenticateToken, updateUserData);
router.put(
  "/update-profile",
  authenticateToken,
  upload.single("profile"),
  updateProfile
);
module.exports = router;
