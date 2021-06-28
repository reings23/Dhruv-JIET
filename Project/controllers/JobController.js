const mongoose = require("mongoose");
const Job = require("../models/Job")

exports.addJob = (req, res) => {
    let { jobTitle, company, location, stipend, userId } = req.body;
    userId = mongoose.Types.ObjectId(userId);
    let job = new Job({
        jobTitle,
        company,
        location, 
        stipend,
        userId,
    });
   job
      .save()
      .then(() => {
       return res.status(200).send(job)
      })
      .catch((error) => {
        console.error(`There was an error while adding new job`, error);
        return res.status(500).send("An error occurred!");
      });
  };

exports.getJobById = (req, res) => {
    let { id } = req.params;
    id = mongoose.Types.ObjectId(id);
    Job.findOne({ _id: id })
      .then((job) => {
        if (!job) {
          console.error(`Job with ID: ${id} doesn't exist.`);
          return res.status(404).send(`Job with ID: ${id} doesn't exist.`);
        }
        console.info(`Jobwith ID: ${id} was successfully found.`);
        return res.status(200).send(Job);
      })
      .catch((error) => {
        console.error(
          `There was an error while searching for task with ID: ${id}`
        );
        return res.status(500).send("ERROR");
      });
  };

exports.getJobsByUserId = (req, res) => {
    let { userId } = req.params;
    userId = mongoose.Types.ObjectId(userId);
    Job.find({ userId })
      .then((jobs) => {
        if (jobs.length === 0) {
          console.error(`There were no jobs found for User with ID: ${userId}`);
          return res.status(404).send([]);
        }
        console.info(
          `Jobs for User with ID: ${userId} were successfully found.`
        );
        return res.status(200).send(jobs);
      })
      .catch((error) => {
        console.error(
          `There was an error while fetching all Jobs for userID: ${userId}`,
          error
        );
        return res.status(500).send("ERROR");
      });
  };