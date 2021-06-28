const express = require("express");
const router = express();
const UserController = require("../controllers/UserController");

router.post("/signup", UserController.signUp);

router.post("/login", UserController.login);

router.get("/user/:id", UserController.getUserById);

module.exports = router;