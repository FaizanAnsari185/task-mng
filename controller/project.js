const Project = require("../models/Projects");

const createProject = async (req, res) => {
    const { name, description, ownerId  } = req.body;
    try {
      const project = new Project({
        name,
        description,
        ownerId,
      });
      await project.save();
      return res
        .status(201)
        .send({ message: "Project created successfully", data: project });
    } catch (error) {
      console.log(error);
      return res.send("Fail to create Project ");
    }
  };


  const getprojects = async (req, res) => {
    const project = await Project.find();
    return res
      .status(201)
      .send({ message: "project fetched successfully", data: project });
  };
  
  const getproject = async (req, res) => {
    const myId = req.params.id;
    try {
      const project = await Project.findById(myId);
      if (!project) {
        return res.status(404).json({ message: "project not found" });
      }
      return res.status(200)
        .json({ message: "project fetched successfully", data: project });
    } catch (error) {
      return res.send(" project not found ");
    }
  };
  
  const deleteProject = async (req, res) => {
    const myId = req.params.id;
    try {
      const project = await Project.findByIdAndDelete(myId);
      if (!project) {
        return res.status(404).json({ message: "project not found" });
      }
      return res.status(200)
        .json({ message: "project deleted successfully", data: project });
    } catch (error) {
      return res.send(" project not found ");
    }
  };
  
  const updateProject = async (req, res) => {
    const myId = req.params.id;
    try {
      const project = await Project.findByIdAndUpdate(myId, req.body, {
        new: true,
      });
      if (!project) {
        return res.status(404).json({ message: "project not found" });
      }
      return res.status(200)
        .json({ message: "project updated successfully", data: project });
    } catch (error) {
      return res.send(" project not found ");
    }
  };


  module.exports = { createProject , getprojects , getproject , deleteProject , updateProject};
