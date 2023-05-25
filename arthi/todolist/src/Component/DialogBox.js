import React, { useState } from "react";
import "./_dialogBoxStyle.scss";

export const MyDialogBox = ({ data }) => {
  const [editStudent, setEditStudent] = useState({
    id: data._id,
    firstname: data.firstname,
    lastname: data.lastname,
    age: data.age,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const closeDialogBox = () => {
    const doc = document;
    doc.querySelector(".dialog-box").classList.remove("dialog-box-open");
  };

  return (
    <main className="dialog-box">
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={data.firstname}
            // onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={data.lastname}
            // onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            className="form-control"
            id="age"
            value={data.age}
            // onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mx-1">
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
