const express = require("express");
const mongoose = require("./src/db/db");
const db = mongoose.connection;

const cors = require("cors");
const app = express();
const studentsRoutes = require("./src/students/routes/students-route");

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//middleware
app.use(cors());
app.use(express.json());
app.use("/student", studentsRoutes);

app.get("", (req, res) => res.send("Welcome to Student backend API"));

app.listen(5000, () => console.log("started server at 5000"));
