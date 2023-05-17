const express = require("express");
const router = express.Router();
const {
  addStudent,
  deleteOneDoc,
  getAllStudents,
  getStudentById,
} = require("../controllers/student-controller");

// CRUD

router.post("/add", addStudent);
router.get("/:id", getStudentById);
router.get("/get", getAllStudents);
router.delete("/:id", deleteOneDoc);

module.exports = router;
