const mongoose = require("mongoose");
const Task = require("../models/task");

exports.addTask = (req, res) => {
    let { taskName, taskDescription, taskDateTime, userId } = req.body;
    userId = mongoose.Types.ObjectId(userId);
    let task = new Task({
      taskName,
      taskDescription,
      taskDateTime,
      userId,
    });
    task
      .save()
      .then(() => {
        console.info(
          `New Task with ID: ${task._id} was successfully created for User ID: ${userId}`
        );
        return res.status(200).send(task);
      })
      .catch((error) => {
        console.error(`There was an error while adding new task.`, error);
        return res.status(500).send("An error occurred!");
      });
  };

  exports.getTaskById = (req, res) => {
    let { id } = req.params;
    id = mongoose.Types.ObjectId(id);
    Task.findOne({ _id: id })
      .then((task) => {
        if (!task) {
          console.error(`Task with ID: ${id} doesn't exist.`);
          return res.status(404).send(`Task with ID: ${id} doesn't exist.`);
        }
        console.info(`Task with ID: ${id} was successfully found.`);
        return res.status(200).send(task);
      })
      .catch((error) => {
        console.error(
          `There was an error while searching for task with ID: ${id}`
        );
        return res.status(500).send("ERROR");
      });
  };

  exports.getTasksByUserId = (req, res) => {
    let { userId } = req.params;
    userId = mongoose.Types.ObjectId(userId);
    Task.find({ userId })
      .then((tasks) => {
        if (tasks.length === 0) {
          console.error(`There were no tasks found for User with ID: ${userId}`);
          return res.status(404).send([]);
        }
        console.info(
          `Tasks for User with ID: ${userId} were successfully found.`
        );
        return res.status(200).send(tasks);
      })
      .catch((error) => {
        console.error(
          `There was an error while fetching all tasks for userID: ${userId}`,
          error
        );
        return res.status(500).send("ERROR");
      });
  };
