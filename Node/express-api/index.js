const express = require("express");
const app = express();

app.use(express.json());

const students = [];

app.get("", (req, res, next) => {
  res.send("hello");
});

app.get("/home", (req, res, next) => {
  res.send("home page");
});

app.get("/about", (req, res, next) => {
  res.send("about page");
});

app.post("/add-student", (req, res, next) => {
  students.push(req.body);
  res.json({ status: 200 });
});

app.get("/get-allstudent", (req, res, next) => {
  res.send(students);
});

app.listen(5000, () => console.log("started server at 5000"));
