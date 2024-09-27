const express = require('express');
const { createProject, getprojects, getproject, deleteProject, updateProject } = require('../controller/project');
const { get } = require('mongoose');
const router = express.Router();

router.post("/project", createProject);
router.get("/projects", getprojects);
router.get("/project/:id", getproject);
router.delete("/project/:id", deleteProject);
router.put("/project/:id", updateProject);


module.exports = router;