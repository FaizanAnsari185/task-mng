const express = require('express');
const { createUser, getUser, deleteUser, updateUser, getUsers } = require('../controller/user');
const router = express.Router();

router.post("/user", createUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);


module.exports = router;