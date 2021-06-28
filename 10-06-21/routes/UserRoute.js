const express = require("express");
const router = express();
const userController = require("../controller/UserController");


router.post("/signup", userController.signUp);

router.post("/login", userController.login);

router.get("/user/:id", userController.getUserById);

module.exports = router;
