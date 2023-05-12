const express = require("express");
const app = express();
const studentsRoutes = require("./src/students/routes/students-route");
const mongoose = require("./src/db/db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//middleware
app.use(express.json());
app.use("/student", studentsRoutes);

app.get("", (req, res) => res.send("Welcome to Student backend API"));

app.listen(5000, () => console.log("started server at 5000"));
