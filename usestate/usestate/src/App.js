import "./App.css";
import { useState } from "react";

export function App() {
  // let a = 34;
  const [count, setcount] = useState(0);
  const [form, setform] = useState({
    username: "",
    email: "",
    password: "",
  });
  // const [username, setusername] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");

  const increamentFunc = () => {
    setcount(count + 1);
    console.log("i");
  };

  const decreamentFunc = () => {
    setcount(count - 1);
    console.log("d");
  };

  const reset = () => {
    setcount(0);
    console.log("d");
  };

  // const updateUser = (e) => {
  //   console.log(e.target.value);
  //   setusername(e.target.value);
  // };

  // const updateEmail = (e) => {
  //   console.log(e.target.value);
  //   setemail(e.target.value);
  // };

  // const updatePassword = (e) => {
  //   console.log(e.target.value);
  //   setpassword(e.target.value);
  // };

  const update = (e) => {
    // console.log(e.target.value, e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    setform({ ...form, [name]: value });
    // setusername(e.target.value);
  };

  const submitForm = () => {
    console.log("submitted data");
    console.log(form);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increamentFunc}>increament</button>
      <button onClick={decreamentFunc}>decreament</button>
      <button onClick={reset}>reset</button>

      <hr />

      <h1>{form.username}</h1>
      <h1>{form.email}</h1>
      <h1>{form.password}</h1>

      <label htmlFor="">username</label>
      <input type="text" onChange={update} name="username" />

      <br />
      <label htmlFor="">email</label>
      <input type="email" onChange={update} name="email" />
      <br />
      <label htmlFor="">password</label>
      <input type="password" onChange={update} name="password" />
      <br />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}
