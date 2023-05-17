const studentModel = require("../models/student-model");

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

exports.getAllStudents = async (req, res, next) => {
  try {
    const data = await student.find();
    if (data.length !== 0) res.send(data);
    else res.send("students not found");
  } catch (error) {
    res.send(error);
  }
};

exports.getStudentById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await studentModel.findById(id);
    res.send(data);
  } catch (error) {
    res.status(404).json({ message: "please check your id" });
  }
};

exports.deleteOneDoc = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await studentModel.findByIdAndDelete(id);
    res.status(200).json({ id: data.id, message: `deleted successfully` });
  } catch (error) {
    res.status(404).json({ message: "please check your id" });
  }
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
