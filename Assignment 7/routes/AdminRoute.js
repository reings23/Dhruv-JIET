const express = require("express");
const router = express();
const AdminController = require("../Controller/AdminController");

router.post("/Admin/Signup",AdminController.AdminSignup);

router.post("/Admin/Login", AdminController.AdminLogin)

module.exports = router;
