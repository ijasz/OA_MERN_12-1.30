const express = require("express");
const router = express.Router();
const {
  addStudentDoc,
  deleteOneStudentDoc,
  getAllStudentsDoc,
  getOneStudentDoc,
  updateOneStudentDoc,
  addManyStudentDoc,
} = require("../controllers/student-controller");

// CRUD

router.post("/add", addStudentDoc);
router.post("/addManyDoc", addManyStudentDoc);
router.get("/get", getAllStudentsDoc);
router.get("/:id", getOneStudentDoc);
router.delete("/:id", deleteOneStudentDoc);
router.put("/:id", updateOneStudentDoc);

module.exports = router;
