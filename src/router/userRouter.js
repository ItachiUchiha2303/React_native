const { Router } = require("express");
const router = Router();
const { userLogin } = require("../controllers/userController");

router.post("/login", userLogin);

module.exports = router;
