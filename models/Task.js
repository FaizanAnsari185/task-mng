const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  dueDate: {
    type: Date,
    // required: true,
  },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  //   assignedTo: {
  //     type: Schema.Types.ObjectId,
  //     required: true,
  //   },
  //   projectId: {
  //     type: Schema.Types.ObjectId,
  //     required: true,
  //   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
