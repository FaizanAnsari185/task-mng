const User = require("../models/User");

const createUser = async (req, res) => {
    const { name, email, password ,role } = req.body;
    try {
      const user = new User({
        name,
        email,
        password,
        role 
      });
      await user.save();
      return res
        .status(201)
        .send({ message: "User created successfully", data: user });
    } catch (error) {
      console.log(error);
      return res.send("Fail to create user ");
    }
  };


  const getUsers = async (req, res) => {
    const user = await User.find();
    return res
      .status(201)
      .send({ message: "User fetched successfully", data: user });
  };
  
  const getUser = async (req, res) => {
    const myId = req.params.id;
    try {
      const user = await User.findById(myId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200)
        .json({ message: "User fetched successfully", data: user });
    } catch (error) {
      return res.send(" user not found ");
    }
  };
  
  const deleteUser = async (req, res) => {
    const myId = req.params.id;
    try {
      const user = await User.findByIdAndDelete(myId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200)
        .json({ message: "User deleted successfully", data: user });
    } catch (error) {
      return res.send(" user not found ");
    }
  };
  
  const updateUser = async (req, res) => {
    const myId = req.params.id;
    try {
      const user = await User.findByIdAndUpdate(myId, req.body, {
        new: true,
      });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200)
        .json({ message: "User updated successfully", data: user });
    } catch (error) {
      return res.send(" user not found ");
    }
  };


  module.exports = { createUser , getUsers, getUser, deleteUser, updateUser };
