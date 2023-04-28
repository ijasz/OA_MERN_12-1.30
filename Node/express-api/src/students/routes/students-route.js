const express = require("express");
const router = express.Router();
const {
  addStudent,
  deleteAllStudents,
  getAllStudents,
  updateStudentById,
} = require("../controllers/student-controller");

router.get("/get", getAllStudents);
router.post("/add", addStudent);
router.delete("/delete-all", deleteAllStudents);
router.put("/:id", updateStudentById);

module.exports = router;
