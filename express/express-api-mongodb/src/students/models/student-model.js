const mongoose = require("mongoose");

const studentModel = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const student = mongoose.model("student", studentModel);

module.exports = student;
