const studentModel = require("../models/student-model");
const students = [];

exports.addStudent = async (req, res, next) => {
  console.log("add student");
  const student = new studentModel(req.body);

  try {
    await student.save();
    res.json({ status: 200 });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllStudents = (req, res, next) => {
  res.send(students);
};

exports.deleteAllStudents = (req, res, next) => {
  students.length = 0;
  res.send("deleted all data");
};

exports.updateStudentById = (req, res, next) => {
  console.log(req.params);
};

// module.exports = {
//   addStudent: (req, res, next) => {
//     console.log("add student");
//     students.push(req.body);
//     res.json({ status: 200 });
//   },

//   getAllStudents: (req, res, next) => {
//     res.send(students);
//   },

//   deleteAllStudents: (req, res, next) => {
//     students.length = 0;
//     res.send("deleted all data");
//   },

//   updateStudentById: (req, res, next) => {
//     console.log(req.params);
//   },
// };

// module.exports = {
//   getAllStudents,
//   deleteAllStudents,
//   updateStudentById,
// };

// console.log(module, "after");
