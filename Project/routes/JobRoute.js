const express = require("express");
const router = express();
const JobController = require("../Controllers/JobController");

router.post("/", JobController.addJob)

router.get("/:id", JobController.getJobById);

router.get("/user/:userId", JobController.getJobsByUserId);


module.exports = router;
