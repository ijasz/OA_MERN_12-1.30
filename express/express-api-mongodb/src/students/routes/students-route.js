const express = require("express");
const router = express.Router();
const {
  addStudent,
  deleteAllStudents,
  getAllStudents,
  updateStudentById,
} = require("../controllers/student-controller");

// CRUD

router.post("/add", addStudent);
router.get("/get", getAllStudents);
router.put("/:id", updateStudentById);
router.delete("/delete-all", deleteAllStudents);

module.exports = router;
