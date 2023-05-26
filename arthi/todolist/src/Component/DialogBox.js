import React, { useState } from "react";
import "./_dialogBoxStyle.scss";
import axios from "axios";

export const MyDialogBox = ({ data }) => {
  const [student, setStudent] = useState({
    firstname: data.firstname,
    lastname: data.lastname,
    age: data.age,
  });

  console.log(data, "got--------------");
  console.log(student, "--------------");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const closeDialogBox = () => {
    const doc = document;
    doc.querySelector(".dialog-box").classList.remove("dialog-box-open");
  };

  const updateStudent = () => {
    axios
      .put(`http://localhost:5000/student/add/${data._id}`, student)
      .then((response) => {
        //  setPost(response.data);
      });
  };

  const updateField = (e) => {
    // setCreateStudent({ ...createStudent, [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  };

  return (
    <main className="dialog-box">
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <p>{JSON.stringify(student)}</p>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={student.firstname}
            onChange={updateField}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={student.lastname}
            onChange={updateField}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            className="form-control"
            id="age"
            value={student.age}
            onChange={updateField}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-1"
          onChange={updateStudent}
        >
          Submit
        </button>
        <button
          type="submit"
          className="btn btn-danger mx-1"
          onClick={closeDialogBox}
        >
          Close
        </button>
      </form>
    </main>
  );
};
