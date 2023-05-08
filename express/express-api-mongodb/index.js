const express = require("express");
const app = express();
const studentsRoutes = require("./src/students/routes/students-route");
const mongoose = require("mongoose");

const username = "root";
const password = "AjGfW8z5fvQZpqvM";
const cluster = "realmcluster.zmek8";
const dbname = "OA_MERN_NOV_11-12";

//middleware
app.use(express.json());
app.use("/student", studentsRoutes);

app.get("", (req, res) => res.send("Welcome to Student backend API"));

app.listen(5000, () => console.log("started server at 5000"));

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
