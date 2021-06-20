const express = require("express");
const router = express();
const userController = require("../Controller/UserController");

router.post("/signup", userController.signUp);

router.post("/login", userController.login);

router.get("/user/:id", userController.getUserById);

router.post("/blogpost", userController.postblog);

router.get("/blogget/:id", userController.getblog)

module.exports = router;