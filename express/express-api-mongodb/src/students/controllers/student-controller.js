const studentModel = require("../models/student-model");

exports.addStudentDoc = async (req, res, next) => {
  console.log("add student");
  const student = new studentModel(req.body);

  try {
    await student.save();
    res.json({ status: 200 });
  } catch (error) {
    res.status(500).json({ error: "Failed to create student" });
  }
};

exports.addManyStudentDoc = async (req, res, next) => {
  console.log("added Many students");
  try {
    await studentModel.insertMany(req.body);
    res.json({ status: 200 });
  } catch (error) {
    res.status(500).json({ error: "Failed to create student" });
  }
};

exports.getAllStudentsDoc = async (req, res, next) => {
  console.log("get all");
  try {
    const data = await studentModel.find({});
    if (data.length !== 0) res.send(data);
    else res.send("students not found");
  } catch (error) {
    res.send(error);
  }
};

exports.getOneStudentDoc = async (req, res, next) => {
  console.log("get one");
  const { id } = req.params;
  try {
    const data = await studentModel.findById(id);
    res.send(data);
  } catch (error) {
    res.status(404).json({ message: "please check your id" });
  }
};

exports.deleteOneStudentDoc = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await studentModel.findByIdAndDelete(id);
    res.status(200).json({ id: data.id, message: `deleted successfully` });
  } catch (error) {
    res.status(404).json({ message: "please check your id" });
  }
};

exports.updateOneStudentDoc = async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const data = await studentModel.findByIdAndUpdate(id, updateData);
    res.status(200).json({ id: data.id, message: `Updated Successfully` });
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
