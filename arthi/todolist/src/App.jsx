import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function List({ data }) {
  return (
    <>
      <section className="d-flex justify-content-between my-3">
        <article className="w-25 text-center">{data._id}</article>
        <article className="w-25 text-center">{data.firstname}</article>
        <article className="w-25 text-center">{data.lastname}</article>
        <article className="w-25 text-center">{data.age}</article>
      </section>
    </>
  );
}

export const App = () => {
  const [student, setStudent] = useState([]);
  const [createStudent, setCreateStudent] = useState({
    firstname: "",
    lastname: "",
    age: 0,
  });

  const today = new Date();
  const doc = window.document;
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();

  const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthlist = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const daymonth = daylist[day] + "," + " " + monthlist[month] + " " + date;

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const hr = today.getHours();
      const min = today.getMinutes();
      const sec = today.getSeconds();
      const time = `<span style="font-size: 20px;">${tConvert(
        hr
      )}</span> hr: <span style="font-size: 20px;">${min}</span> min : <span style="font-size: 20px;">${sec}</span> sec`;
      document.getElementById("time").innerHTML = time;
    }, 1000);

    axios
      .get("http://localhost:5000/student/get")
      .then((response) => {
        console.log(response.data);
        setStudent(response.data);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
      })
      .catch((e) => console.log(e));

    return () => clearInterval(interval);
  }, []);

  function tConvert(hr) {
    if (hr === 0) {
      return 1;
    } else if (hr > 12) {
      return hr - 12;
    } else {
      return hr;
    }
  }

  const updateField = (e) => {
    setCreateStudent({ ...createStudent, [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const createStudentFunc = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/student/add",
      data: createStudent,
    }).then((res) => {
      console.log(res.data);
      setStudent([...student, createStudent]);
    });
  };

  return (
    <main className="container bg-light p-4">
      <section className="d-flex justify-content-between">
        <div>
          <div id="day">{daymonth}</div>
          <div id="time">12:01:20 </div>
        </div>
        <div id="Add-Task">
          <input
            type="text"
            placeholder="Firstname"
            className="m-1"
            name="firstname"
            onChange={updateField}
          />
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            className="m-1"
            onChange={updateField}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            className="m-1"
            onChange={updateField}
          />
          <button className="addBtn" onClick={createStudentFunc}>
            Add Student
          </button>
        </div>
      </section>
      <hr />
      <h3 className="text-center">
        Students List {JSON.stringify(createStudent)}
      </h3>
      <hr />
      <section className="d-flex justify-content-between">
        <h6 className="w-25 text-center">ID</h6>
        <h6 className="w-25 text-center">Firstname</h6>
        <h6 className="w-25 text-center">Lastname</h6>
        <h6 className="w-25 text-center">Age</h6>
      </section>
      <hr />
      {student.map((data) => (
        <List data={data} />
      ))}
    </main>
  );
};
