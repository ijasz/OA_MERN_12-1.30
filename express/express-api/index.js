const express = require("express");
const app = express();
const studentsRoutes = require("./src/students/routes/students-route");

//middleware
app.use(express.json());
app.use("/student", studentsRoutes);

app.get("", (req, res) => res.send("Welcome to Student backend API"));

app.listen(5000, () => console.log("started server at 5000"));
