const express = require('express');
const router = express.Router();
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controller/task');


router.post("/task", createTask);
router.get("/tasks", getTasks);
router.get("/task/:id", getTask);
router.delete("/task/:id", deleteTask);
router.put("/task/:id", updateTask);


module.exports = router;