const students = [];

const addStudent = (req, res, next) => {
  console.log("add student");
  students.push(req.body);
  res.json({ status: 200 });
};

const getAllStudents = (req, res, next) => {
  res.send(students);
};

const deleteAllStudents = (req, res, next) => {
  students.length = 0;
  res.send("deleted all data");
};

const updateStudentById = (req, res, next) => {
  console.log(req.params);
};

module.exports = {
  addStudent,
  getAllStudents,
  deleteAllStudents,
  updateStudentById,
};
