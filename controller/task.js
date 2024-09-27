const Task = require("../models/Task");

const createTask = async (req, res) => {
  const { title } = req.body;
  try {
    const task = new Task({
      title,
    });
    await task.save();
    return res
      .status(201)
      .send({ message: "Task created successfully", data: task });
  } catch (error) {
    console.log(error);
    return res.send("Fail to create Task ");
  }
};

const getTasks = async (req, res) => {
  const task = await Task.find();
  return res
    .status(200)
    .send({ message: "Tasks fetched successfully", data: task });
};

const getTask = async (req, res) => {
  const myId = req.params.id;
  try {
    const task = await Task.findById(myId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res
      .status(200)
      .json({ message: "Task fetched successfully", data: task });
  } catch (error) {
    return res.send(" Task not found ");
  }
};

const deleteTask = async (req, res) => {
  const myId = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(myId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res
      .status(200)
      .json({ message: "Task deleted successfully", data: task });
  } catch (error) {
    return res.send(" Task not found ");
  }
};

const updateTask = async (req, res) => {
  const myId = req.params.id;
  try {
    const task = await Task.findByIdAndUpdate(myId, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res
      .status(200)
      .json({ message: "Task updated successfully", data: task });
  } catch (error) {
    return res.send(" Task not found ");
  }
};

module.exports = { createTask, getTasks, getTask, deleteTask, updateTask };
