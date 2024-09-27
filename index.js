const express = require('express');
const mongoose = require('mongoose');    //data base
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');
const app = express();


app.use(cors());

app.use(express.json());

const port = 3000;

app.use(express.json()); 
app.use(userRoutes);
app.use(projectRoutes);
app.use(taskRoutes);

async function connectDb() {
    try {
      const connect = await mongoose.connect(
        "mongodb+srv://superseupermfa:43Zgdk3JLu2Lg7D4@cluster0.aadyw.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0"
      );
      console.log("datbase connected: ");
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }
  connectDb();
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });